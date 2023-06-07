import { api } from '@/services/api';
import { ICategories } from '@/types/ICategories';
import { useEffect, useState } from 'react';

const useCategories = () => {
  const [categories, setCategories] = useState<ICategories[]>([]);
  const fetch = async () => {
    const response = await api.get('/categories.php');
    setCategories(response.data.categories);
  };

  useEffect(() => {
    fetch();
  });

  return {
    categories
  };
};

export { useCategories };
