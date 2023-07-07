import { IMeal } from '@/types';
import { useUtilsStore } from '@/store/utils';
import { fetchService } from '@/services/fetch';

import { useEffect, useState } from 'react';
import { useErrorBoundary } from 'react-error-boundary';

const useMealTemplate = (id: string) => {
  const [meal, setMeal] = useState<IMeal>();
  const { showBoundary } = useErrorBoundary();

  const {
    state: { isLoading, notFound },
    actions: { setLoading, setNotFound }
  } = useUtilsStore();

  useEffect(() => {
    const controller = new AbortController();
    const setMealOperation = (data: IMeal[]) => setMeal({ ...data[0] });

    fetchService(
      `/lookup.php?i=${id}`,
      'meals',
      setLoading,
      setMealOperation,
      showBoundary,
      controller,
      setNotFound
    );

    return () => {
      controller.abort();
    };
  }, [id, setLoading, setMeal, setNotFound, showBoundary]);

  return {
    isLoading,
    notFound,
    mealInfo: meal,
    ...meal
  };
};

export { useMealTemplate };
