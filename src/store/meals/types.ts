import { IMeal } from '@/types/IMeal';

export type useMealStoreProps = {
  state: {
    meals: IMeal[];
    isLoading: boolean;
    isNoMeals: boolean;
  };
  actions: {
    initialState: () => void;
    setLoading: () => void;
    success: (mealsArray: IMeal[]) => void;
    fail: () => void;
  };
};
