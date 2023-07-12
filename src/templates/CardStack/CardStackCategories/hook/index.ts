import { Categories } from '@/types';

import { useEffect, useState } from 'react';
import { useErrorBoundary } from 'react-error-boundary';
import { useUtilsStore } from '@/store/utils';
import { fetchService } from '@/services/fetch';

const useCategories = () => {
  const [categories, setCategories] = useState<Categories[]>([]);
  const { showBoundary } = useErrorBoundary();

  const {
    state: { isLoading },
    actions: { setLoading }
  } = useUtilsStore();

  useEffect(() => {
    const controller = new AbortController();
    const url = 'categories.php';

    fetchService(
      url,
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
