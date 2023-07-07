import { UseMealStore } from './types';

import { create } from 'zustand';

const useMealStore = create<UseMealStore>((set) => ({
  state: {
    meals: [],
    noMeals: false,
    isLoading: false,
    searchMeal: ''
  },
  actions: {
    initialState: () => {
      set(() => ({
        state: {
          meals: [],
          noMeals: false,
          isLoading: false,
          searchMeal: ''
        }
      }));
    },
    setSearchMeal: (mealName) => {
      set((state) => ({
        state: { ...state.state, searchMeal: mealName }
      }));
    },
    setLoading: () => {
      set((state) => ({
        state: { ...state.state, isLoading: true }
      }));
    },
    success: (mealsArray) => {
      set((state) => ({
        state: {
          ...state.state,
          meals: [...mealsArray],
          noMeals: false,
          isLoading: false
        }
      }));
    },
    fail: () => {
      set((state) => ({
        state: {
          ...state.state,
          meals: [],
          noMeals: true,
          isLoading: false
        }
      }));
    }
  }
}));

export { useMealStore };
