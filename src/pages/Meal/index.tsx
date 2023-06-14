import { MealTemplate } from '@/templates/MealTemplate';
import * as S from './style';
import { useParams } from 'react-router-dom';

function Meal() {
  const { mealId } = useParams();

  return (
    <S.Main>
      <MealTemplate mealId={mealId!} />
    </S.Main>
  );
}

export { Meal };
