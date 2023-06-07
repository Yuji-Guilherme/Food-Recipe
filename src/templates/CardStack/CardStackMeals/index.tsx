import * as S from './style';
import { useMealStore } from '@/store/meals';
import { MealsCard } from '@/components/Cards/MealsCard';

type CardStackMealsProps = {
  category?: string;
};

function CardStackMeals({ category }: CardStackMealsProps) {
  const {
    state: { meals, isNoMeals }
  } = useMealStore();

  return (
    <S.Section>
      {isNoMeals && <S.ErrorMessage>There are no recipes</S.ErrorMessage>}
      {meals.length > 0 && <S.TitleMeals>{category} Recipes</S.TitleMeals>}
      <S.CardStackMeals>
        {meals?.map((item) => (
          <MealsCard {...item} key={item.idMeal} />
        ))}
      </S.CardStackMeals>
    </S.Section>
  );
}

export { CardStackMeals };
