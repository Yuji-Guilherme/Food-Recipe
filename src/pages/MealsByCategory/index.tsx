import { CardStackMeals } from '@/templates/CardStack';

import * as S from './style';
import { useMealByCategory } from './hook';

function MealsByCategory() {
  const { mealCategory } = useMealByCategory();

  return (
    <S.Main>
      <CardStackMeals category={mealCategory} />
    </S.Main>
  );
}

export { MealsByCategory };
