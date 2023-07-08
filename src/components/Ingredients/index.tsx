import { Meal } from '@/types';
import { useIngredients } from './hook';

import * as S from './style';

type IngredientsProps = {
  meal: Meal;
};

function Ingredients({ meal }: IngredientsProps) {
  const { ingredients } = useIngredients(meal);

  return (
    <S.IngredientSection>
      <S.SecondaryTitle>Ingredients</S.SecondaryTitle>
      <S.IngredientsWrapper>
        {ingredients.map((item, index) => (
          <S.Ingredient key={index}>
            {item.strIngredient} - {item.strMeasure}
          </S.Ingredient>
        ))}
      </S.IngredientsWrapper>
    </S.IngredientSection>
  );
}

export { Ingredients };
