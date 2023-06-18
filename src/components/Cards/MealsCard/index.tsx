import { IMeal } from '@/types';
import { useMealsCard } from './hook';
import { useTags } from '@/hooks/useTags';

import * as S from './style';

function MealsCard({
  strArea,
  strCategory,
  strMeal,
  strMealThumb,
  idMeal
}: Partial<IMeal>) {
  const { handleClick } = useMealsCard();

  const { handleNavigate } = useTags();

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
          <S.TextWrapper>
            <S.Text>{strArea} /</S.Text>
            <S.TextCategory onClick={() => handleNavigate(strCategory)}>
              {strCategory}
            </S.TextCategory>
          </S.TextWrapper>
        )}
      </S.TextCard>
    </S.CardMeals>
  );
}

export { MealsCard };
