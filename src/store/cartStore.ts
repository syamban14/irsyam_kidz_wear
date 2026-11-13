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
  clearCart: () => void;
  getTotalItems: () => number;
  getSubtotal: () => number;
  getShippingFee: () => number;
  getFinalTotal: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [
        // Initial sample items for immediate rich demo if empty
      ],
      promoCode: '',
      discount: 0,
      promoError: null,

      addItem: (product, size, color, quantity = 1) => {
        const itemId = `${product.id}-${size}-${color}`;
        set((state) => {
          const existingIndex = state.items.findIndex((item) => item.id === itemId);
          if (existingIndex > -1) {
            const updatedItems = [...state.items];
            updatedItems[existingIndex].quantity += quantity;
            return { items: updatedItems };
          }
          return {
            items: [
              ...state.items,
              {
                id: itemId,
                product,
                size,
                color,
                quantity,
              },
            ],
          };
        });
      },

      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
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
          return { items: updatedItems };
        });
      },

      applyPromoCode: (code: string) => {
        const clean = code.trim().toUpperCase();
        if (clean === 'KIDZ25') {
          set({ promoCode: clean, discount: 25000, promoError: null });
          return true;
        } else if (clean === 'PLAYROOM10') {
          const subtotal = get().getSubtotal();
          const discount = Math.round(subtotal * 0.1);
          set({ promoCode: clean, discount, promoError: null });
          return true;
        } else {
          set({ promoError: 'Kode voucher tidak valid. Gunakan "KIDZ25" untuk diskon Rp25.000' });
          return false;
        }
      },

      clearCart: () => {
        set({ items: [], promoCode: '', discount: 0, promoError: null });
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getSubtotal: () => {
        return get().items.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        );
      },

      getShippingFee: () => {
        const subtotal = get().getSubtotal();
        if (subtotal === 0) return 0;
        return subtotal >= 250000 ? 0 : 15000;
      },

      getFinalTotal: () => {
        const subtotal = get().getSubtotal();
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
