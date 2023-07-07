import { useUtilsStore } from '@/store/utils';
import { useSearchStore } from '@/store/search';

import { useEffect, useState } from 'react';
import { useErrorBoundary } from 'react-error-boundary';
import { IMeal } from '@/types';
import { fetchService } from '@/services/fetch';

type FetchType = {
  (url: string, controller?: AbortController): Promise<void>;
};

const useMeals = (category: string | undefined) => {
  const [meals, setMeals] = useState<IMeal[]>([]);
  const { showBoundary } = useErrorBoundary();

  const {
    state: { isLoading, notFound },
    actions: { initialState, setLoading, setNotFound }
  } = useUtilsStore();

  const {
    state: { searchMeal },
    actions: { clearSearch }
  } = useSearchStore();

  useEffect(() => {
    const controller = new AbortController();

    const resetMeals = () => {
      setMeals([]);
      initialState();
      clearSearch();
    };

    const fetch: FetchType = async (url, controller) => {
      fetchService(
        url,
        'meals',
        setLoading,
        setMeals,
        showBoundary,
        controller,
        setNotFound,
        resetMeals
      );
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
    clearSearch,
    setLoading,
    setNotFound,
    setMeals,
    showBoundary
  ]);

  return { meals, isLoading, notFound };
};

export { useMeals };
