import { api } from '@/services/api';
import { ICategories } from '@/types';
import { useEffect, useState } from 'react';

const useCategories = () => {
  const [categories, setCategories] = useState<ICategories[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    const fetch = async () => {
      const response = await api.get('/categories.php', {
        signal: controller.signal
      });
      setCategories(response.data.categories);
      setIsLoading(false);
    };

    fetch();

    return () => {
      controller.abort();
    };
  }, [setIsLoading]);

  return {
    isLoading,
    categories
  };
};

export { useCategories };
