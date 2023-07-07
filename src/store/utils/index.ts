import { UseUtilsStore } from './types';

import { create } from 'zustand';

const useUtilsStore = create<UseUtilsStore>((set) => ({
  state: {
    notFound: false,
    isLoading: false
  },
  actions: {
    initialState: () => {
      set(() => ({
        state: {
          notFound: false,
          isLoading: false
        }
      }));
    },
    setLoading: (boolean) => {
      set((state) => ({
        state: { ...state.state, isLoading: boolean }
      }));
    },
    setNotFound: () => {
      set(() => ({
        state: {
          notFound: true,
          isLoading: false
        }
      }));
    }
  }
}));

export { useUtilsStore };
