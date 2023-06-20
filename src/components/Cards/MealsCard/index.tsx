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
      <S.ImageWrapper onClick={() => handleClick(idMeal)}>
        <S.ImageCardMeals src={strMealThumb} />
      </S.ImageWrapper>
      <S.TextMealsCard>
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
      </S.TextMealsCard>
    </S.CardMeals>
  );
}

export { MealsCard };
