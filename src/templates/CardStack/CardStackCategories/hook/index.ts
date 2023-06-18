import { ICategories } from '@/types';
import { api } from '@/services/api';

import { useEffect, useState } from 'react';
import { useErrorBoundary } from 'react-error-boundary';

const useCategories = () => {
  const [categories, setCategories] = useState<ICategories[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);

    const fetch = async () => {
      try {
        const response = await api.get('categories.php', {
          signal: controller.signal
        });
        setCategories(response.data.categories);
        setIsLoading(false);
      } catch (error) {
        if (error instanceof Error && error.name === 'TypeError') return;
        showBoundary(error);
      }
    };

    fetch();

    return () => {
      controller.abort();
    };
  }, [setIsLoading, showBoundary]);

  return {
    isLoading,
    categories
  };
};

export { useCategories };
