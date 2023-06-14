import { IMeal } from '@/types';
import { api } from '@/services/api';
import { useEffect, useState, useCallback } from 'react';

const useMealTemplate = (id: string) => {
  const [mealInfo, setMealInfo] = useState<IMeal>();
  const [err, setErr] = useState(false);

  const fetch = useCallback(async () => {
    const response = await api.get(`/lookup.php?i=${id}`);
    if (!response.data.meals) return setErr(true);
    const meal: IMeal = { ...response.data.meals[0] };

    setMealInfo(meal);
  }, [id]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return {
    err,
    mealInfo,
    ...mealInfo
  };
};

export { useMealTemplate };
