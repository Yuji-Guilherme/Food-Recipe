import { api } from '@/services/api';
import { IMeal } from '@/types/IMeal';
import { create } from 'zustand';

type useMealsProps = {
  meals: IMeal[];
  execute: (mealText: string) => void;
};

const useMeals = create<useMealsProps>((set) => ({
  meals: [],
  execute: async (mealText) => {
    const response = await api.get(`/search.php?s=${mealText}`);
    console.log(response.data.meals);
    set({ meals: [...response.data.meals] as IMeal[] });
  }
}));

export { useMeals };
