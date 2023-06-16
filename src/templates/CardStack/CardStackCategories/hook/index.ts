import { api } from '@/services/api';
import { ICategories } from '@/types';
import { useEffect, useState } from 'react';

const useCategories = () => {
  const [categories, setCategories] = useState<ICategories[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetch = async () => {
    const response = await api.get('/categories.php');
    setCategories(response.data.categories);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch();
  }, [setIsLoading]);

  return {
    isLoading,
    categories
  };
};

export { useCategories };
