import { Meal, Ingredient } from '@/types';
import { filterObjByName, mergeArray } from '@/functions';

import { useEffect, useState } from 'react';

const useIngredients = (meal: Meal) => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

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
