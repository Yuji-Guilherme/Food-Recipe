import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '@/services/api';
import { useMealStore } from '@/store/meals';

const useMealByCategory = () => {
  const { mealCategory } = useParams();
  const {
    actions: { initialState, setLoading, fail, success }
  } = useMealStore();

  const fetch = useCallback(async () => {
    initialState();
    setLoading();
    const response = await api.get(`/filter.php?c=${mealCategory}`);
    const mealsData = response.data.meals;
    if (!mealsData) return fail();
    return success(mealsData);
  }, [mealCategory, initialState, setLoading, fail, success]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return {
    mealCategory
  };
};

export { useMealByCategory };
