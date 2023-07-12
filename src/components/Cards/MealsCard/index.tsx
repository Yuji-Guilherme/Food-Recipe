import { Meal } from '@/types';
import { useHandleNavigate } from '@/hooks/useHandleNavigate';
import { useTags } from '@/hooks/useTags';

import * as S from './style';

function MealsCard({
  strArea,
  strCategory,
  strMeal,
  strMealThumb,
  idMeal
}: Partial<Meal>) {
  const { handleNavigate } = useHandleNavigate();
  const { handleNavigateTags } = useTags();
  const url = `/meal/${idMeal}`;

  return (
    <S.CardMeals>
      <S.ImageWrapper onClick={() => handleNavigate(url)}>
        <S.ImageCardMeals src={strMealThumb} />
      </S.ImageWrapper>
      <S.TextMealsCard>
        <S.TitleMeals onClick={() => handleNavigate(url)}>
          {strMeal}
        </S.TitleMeals>
        {strArea && strCategory && (
          <S.TextWrapper>
            <S.Text>{strArea} /</S.Text>
            <S.TextCategory onClick={() => handleNavigateTags(strCategory)}>
              {strCategory}
            </S.TextCategory>
          </S.TextWrapper>
        )}
      </S.TextMealsCard>
    </S.CardMeals>
  );
}

export { MealsCard };
