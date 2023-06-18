import { useMealStoreProps } from './types';

import { create } from 'zustand';

const useMealStore = create<useMealStoreProps>((set) => ({
  state: {
    meals: [],
    noMeals: false,
    isLoading: false
  },
  actions: {
    initialState: () => {
      set(() => ({
        state: {
          meals: [],
          noMeals: false,
          isLoading: false
        }
      }));
    },
    setLoading: () => {
      set((state) => ({
        state: { ...state.state, isLoading: true }
      }));
    },
    success: (mealsArray) => {
      set(() => ({
        state: {
          meals: [...mealsArray],
          noMeals: false,
          isLoading: false
        }
      }));
    },
    fail: () => {
      set(() => ({
        state: {
          meals: [],
          noMeals: true,
          isLoading: false
        }
      }));
    }
  }
}));

export { useMealStore };
