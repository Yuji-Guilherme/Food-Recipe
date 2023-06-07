import { create } from 'zustand';
import { useMealStoreProps } from './types';

//error test `https://httpstat.us/500`

const useMealStore = create<useMealStoreProps>((set) => ({
  state: {
    meals: [],
    isNoMeals: false,
    isLoading: false
  },
  actions: {
    initialState: () => {
      set(() => ({
        state: {
          meals: [],
          isNoMeals: false,
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
          isNoMeals: false,
          isLoading: false
        }
      }));
    },
    fail: () => {
      set(() => ({
        state: {
          meals: [],
          isNoMeals: true,
          isLoading: false
        }
      }));
    }
  }
}));

export { useMealStore };
