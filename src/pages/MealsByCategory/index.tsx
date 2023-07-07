import { CardStackMeals } from '@/templates/CardStack';
import * as S from './style';

import { useParams } from 'react-router-dom';

function MealsByCategory() {
  const { mealCategory } = useParams();

  return (
    <S.Main>
      <CardStackMeals category={mealCategory} />
    </S.Main>
  );
}

export { MealsByCategory };
