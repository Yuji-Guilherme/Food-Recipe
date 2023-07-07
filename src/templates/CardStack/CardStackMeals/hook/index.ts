import { isTypeError } from '@/functions';
import { StateMealStore } from '@/store/meals/types';
import { useMealStore } from '@/store/meals';
import { api } from '@/services/api';

import { useEffect } from 'react';
import { useErrorBoundary } from 'react-error-boundary';

type useMealsType = {
  (category?: string | undefined): Partial<StateMealStore>;
};

type FetchType = {
  (url: string, controller?: AbortController): Promise<void>;
};

const useMeals: useMealsType = (category) => {
  const {
    state: { meals, isLoading, noMeals, searchMeal },
    actions: { initialState, setLoading, fail, success }
  } = useMealStore();

  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    const controller = new AbortController();

    const fetch: FetchType = async (url, controller) => {
      initialState();
      setLoading();
      try {
        const response = await api.get(url, {
          signal: controller?.signal
        });
        const mealsData = response.data.meals;

        if (!mealsData) return fail();
        return success(mealsData);
      } catch (error) {
        if (isTypeError(error)) return;
        showBoundary(error);
      }
    };

    if (category) fetch(`/filter.php?c=${category}`, controller);
    if (searchMeal) fetch(`/search.php?s=${searchMeal}`);

    return () => {
      controller.abort();
    };
  }, [
    searchMeal,
    category,
    initialState,
    setLoading,
    fail,
    success,
    showBoundary
  ]);

  return { meals, isLoading, noMeals };
};

export { useMeals };
