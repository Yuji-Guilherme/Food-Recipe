import { IMeal } from '@/types/IMeal';

export type useMealStoreProps = {
  state: {
    meals: IMeal[];
    isLoading: boolean;
    isNoMeals: boolean;
  };
  actions: {
    setLoading: () => void;
    success: (mealsArray: IMeal[]) => void;
    fail: () => void;
  };
};
