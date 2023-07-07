import { ICategories } from '@/types';

import { useEffect, useState } from 'react';
import { useErrorBoundary } from 'react-error-boundary';
import { useUtilsStore } from '@/store/utils';
import { fetchService } from '@/services/fetch';

const useCategories = () => {
  const [categories, setCategories] = useState<ICategories[]>([]);
  const { showBoundary } = useErrorBoundary();
  const {
    state: { isLoading },
    actions: { setLoading }
  } = useUtilsStore();

  useEffect(() => {
    const controller = new AbortController();

    fetchService(
      'categories.php',
      'categories',
      setLoading,
      setCategories,
      showBoundary,
      controller
    );

    return () => {
      controller.abort();
    };
  }, [setLoading, showBoundary]);

  return {
    isLoading,
    categories
  };
};

export { useCategories };
