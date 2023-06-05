import * as S from './style';
import { useMealStore } from '@/store/meals';
import { MealsCard } from '@/components/Cards/MealsCard';

function CardStackMeals() {
  const {
    state: { meals, isNoMeals }
  } = useMealStore();

  return (
    <S.Section>
      {isNoMeals && <S.ErrorMessage>There are no recipes</S.ErrorMessage>}
      {meals.length > 0 && <S.TitleMeals>Recipes</S.TitleMeals>}
      <S.CardStackMeals>
        {meals?.map((item) => (
          <MealsCard {...item} key={item.idMeal} />
        ))}
      </S.CardStackMeals>
    </S.Section>
  );
}

export { CardStackMeals };
