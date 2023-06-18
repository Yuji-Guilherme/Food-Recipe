import { CardStackMeals } from '@/templates/CardStack';
import { useMealByCategory } from './hook';

import * as S from './style';

function MealsByCategory() {
  const { mealCategory } = useMealByCategory();

  return (
    <S.Main>
      <CardStackMeals category={mealCategory} />
    </S.Main>
  );
}

export { MealsByCategory };
