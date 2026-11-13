import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WishlistStore {
  favoriteIds: string[];
  toggleFavorite: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
  clearFavorites: () => void;
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      favoriteIds: [],

      toggleFavorite: (productId: string) => {
        set((state) => {
          const exists = state.favoriteIds.includes(productId);
          return {
            favoriteIds: exists
              ? state.favoriteIds.filter((id) => id !== productId)
              : [...state.favoriteIds, productId],
          };
        });
      },

      isFavorite: (productId: string) => {
        return get().favoriteIds.includes(productId);
      },

      clearFavorites: () => set({ favoriteIds: [] }),
    }),
    {
      name: 'irsyam-kidz-wishlist-v1',
    }
  )
);
