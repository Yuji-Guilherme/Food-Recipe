import { IMeal } from '@/types/IMeal';
import * as S from './style';

function MealsCard({
  strArea,
  strCategory,
  strMeal,
  strMealThumb
}: Partial<IMeal>) {
  return (
    <S.CardMeals>
      <S.ImageCardMeals src={strMealThumb} />
      <S.TextCard>
        <S.TitleMeals>{strMeal}</S.TitleMeals>
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
