import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '@/services/api';
import { useMealStore } from '@/store/meals';

const useMealByCategory = () => {
  const { mealCategory } = useParams();
  const {
    actions: { initialState, setLoading, fail, success }
  } = useMealStore();

  useEffect(() => {
    const controller = new AbortController();
    const fetch = async () => {
      initialState();
      setLoading();
      const response = await api.get(`/filter.php?c=${mealCategory}`, {
        signal: controller.signal
      });
      const mealsData = response.data.meals;
      if (!mealsData) return fail();
      return success(mealsData);
    };

    fetch();

    return () => {
      controller.abort();
    };
  }, [mealCategory, initialState, setLoading, fail, success]);

  return {
    mealCategory
  };
};

export { useMealByCategory };
