import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/data/products';

export interface CartItem {
  id: string; // Composite key: `${productId}-${size}-${color}`
  product: Product;
  size: string;
  color: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  promoCode: string;
  discount: number;
  promoError: string | null;
  addItem: (product: Product, size: string, color: string, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  applyPromoCode: (code: string) => boolean;
  clearPromo: () => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getSubtotal: () => number;
  getShippingFee: () => number;
  getFinalTotal: () => number;
}

function calcSubtotal(items: CartItem[]): number {
  return items.reduce((total, item) => total + item.product.price * item.quantity, 0);
}

function recalculateDiscount(promoCode: string, items: CartItem[]): {
  promoCode: string;
  discount: number;
} {
  const subtotal = calcSubtotal(items);
  if (subtotal === 0 || !promoCode) {
    return { promoCode: '', discount: 0 };
  }
  if (promoCode === 'KIDZ25') {
    return { promoCode: 'KIDZ25', discount: Math.min(25000, subtotal) };
  }
  if (promoCode === 'PLAYROOM10') {
    return { promoCode: 'PLAYROOM10', discount: Math.round(subtotal * 0.1) };
  }
  return { promoCode: '', discount: 0 };
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      promoCode: '',
      discount: 0,
      promoError: null,

      addItem: (product, size, color, quantity = 1) => {
        const itemId = `${product.id}-${size}-${color}`;
        set((state) => {
          const existingIndex = state.items.findIndex((item) => item.id === itemId);
          let updatedItems: CartItem[];
          if (existingIndex > -1) {
            updatedItems = [...state.items];
            updatedItems[existingIndex] = {
              ...updatedItems[existingIndex],
              quantity: updatedItems[existingIndex].quantity + quantity,
            };
          } else {
            updatedItems = [
              ...state.items,
              {
                id: itemId,
                product,
                size,
                color,
                quantity,
              },
            ];
          }
          const promoUpdate = recalculateDiscount(state.promoCode, updatedItems);
          return { items: updatedItems, ...promoUpdate };
        });
      },

      removeItem: (id) => {
        set((state) => {
          const updatedItems = state.items.filter((item) => item.id !== id);
          const promoUpdate = recalculateDiscount(state.promoCode, updatedItems);
          return { items: updatedItems, ...promoUpdate };
        });
      },

      updateQuantity: (id, delta) => {
        set((state) => {
          const updatedItems = state.items
            .map((item) => {
              if (item.id === id) {
                const newQty = item.quantity + delta;
                return newQty > 0 ? { ...item, quantity: newQty } : null;
              }
              return item;
            })
            .filter((item): item is CartItem => item !== null);
          const promoUpdate = recalculateDiscount(state.promoCode, updatedItems);
          return { items: updatedItems, ...promoUpdate };
        });
      },

      applyPromoCode: (code: string) => {
        const clean = code.trim().toUpperCase();
        const subtotal = calcSubtotal(get().items);
        if (subtotal === 0) {
          set({ promoError: 'Tambahkan minimal 1 produk sebelum menggunakan voucher.' });
          return false;
        }
        if (clean === 'KIDZ25') {
          set({ promoCode: clean, discount: Math.min(25000, subtotal), promoError: null });
          return true;
        }
        if (clean === 'PLAYROOM10') {
          set({ promoCode: clean, discount: Math.round(subtotal * 0.1), promoError: null });
          return true;
        }
        set({ promoError: 'Kode voucher tidak valid. Gunakan "KIDZ25" untuk diskon Rp25.000' });
        return false;
      },

      clearPromo: () => {
        set({ promoCode: '', discount: 0, promoError: null });
      },

      clearCart: () => {
        set({ items: [], promoCode: '', discount: 0, promoError: null });
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getSubtotal: () => {
        return calcSubtotal(get().items);
      },

      getShippingFee: () => {
        const subtotal = calcSubtotal(get().items);
        if (subtotal === 0) return 0;
        return subtotal >= 250000 ? 0 : 15000;
      },

      getFinalTotal: () => {
        const subtotal = calcSubtotal(get().items);
        if (subtotal === 0) return 0;
        const shipping = get().getShippingFee();
        const serviceFee = 1000;
        const total = subtotal + shipping + serviceFee - get().discount;
        return Math.max(0, total);
      },
    }),
    {
      name: 'irsyam-kidz-cart-v1',
    }
  )
);
