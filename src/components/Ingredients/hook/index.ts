import { IMeal, IIngredients } from '@/types';
import { filterObjByName, mergeArray } from '@/function';

import { useEffect, useState } from 'react';

const useIngredients = (meal: IMeal) => {
  const [ingredients, setIngredients] = useState<IIngredients[]>([]);

  useEffect(() => {
    const onlyIngredientsArray = filterObjByName(meal, 'strIngredient');
    const onlyMeasureArray = filterObjByName(meal, 'strMeasure');

    const completeIngredientsArray = mergeArray(
      onlyIngredientsArray,
      onlyMeasureArray
    );

    setIngredients(completeIngredientsArray);
  }, [meal]);

  return {
    ingredients
  };
};

export { useIngredients };
