import { MealTemplate } from '@/templates/MealTemplate';

import { useParams } from 'react-router-dom';

import * as S from './style';

function Meal() {
  const { mealId } = useParams();

  return (
    <S.Main>
      <MealTemplate mealId={mealId!} />
    </S.Main>
  );
}

export { Meal };
