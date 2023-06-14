import { IMeal } from '@/types';
import * as S from './style';
import { useMealsCard } from './hook';

function MealsCard({
  strArea,
  strCategory,
  strMeal,
  strMealThumb,
  idMeal
}: Partial<IMeal>) {
  const { handleClick } = useMealsCard();

  return (
    <S.CardMeals>
      <S.ImageCardMeals
        src={strMealThumb}
        onClick={() => handleClick(idMeal)}
      />
      <S.TextCard>
        <S.TitleMeals onClick={() => handleClick(idMeal)}>
          {strMeal}
        </S.TitleMeals>
        {strArea && strCategory && (
          <S.Text>
            {strArea} / {strCategory}
          </S.Text>
        )}
      </S.TextCard>
    </S.CardMeals>
  );
}

export { MealsCard };
