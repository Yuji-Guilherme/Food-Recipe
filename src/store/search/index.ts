import { UseSearchStore } from './types';

import { create } from 'zustand';

const useSearchStore = create<UseSearchStore>((set) => ({
  state: {
    searchMeal: ''
  },
  actions: {
    clearSearch: () => {
      set(() => ({
        state: {
          searchMeal: ''
        }
      }));
    },
    setSearchMeal: (mealName) => {
      set(() => ({
        state: { searchMeal: mealName }
      }));
    }
  }
}));

export { useSearchStore };
