import { IMeal } from '@/types';

export interface UseMealStore {
  state: StateMealStore;
  actions: ActionsMealStore;
}

export interface StateMealStore {
  meals: IMeal[];
  isLoading: boolean;
  noMeals: boolean;
  searchMeal: string;
}

export interface ActionsMealStore {
  initialState: () => void;
  setSearchMeal: (mealName: string) => void;
  setLoading: () => void;
  success: (mealsArray: IMeal[]) => void;
  fail: () => void;
}
