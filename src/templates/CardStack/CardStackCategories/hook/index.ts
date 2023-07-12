import { Categories } from '@/types';
import { useUtilsStore } from '@/store/utils';
import { fetchService } from '@/services/fetch';

import { useEffect, useState } from 'react';
import { useErrorBoundary } from 'react-error-boundary';

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
