import * as S from './style';
import { useMealStore } from '@/store/meals';
import { MealsCard } from '@/components/Cards/MealsCard';
import { Skeleton } from '@/components/Skeleton';

type CardStackMealsProps = {
  category?: string;
};

function CardStackMeals({ category }: CardStackMealsProps) {
  const {
    state: { meals, isLoading, noMeals }
  } = useMealStore();

  return (
    <S.Section>
      {noMeals && <S.ErrorMessage>There are no recipes</S.ErrorMessage>}
      <S.TitleWrapper>
        {isLoading && <Skeleton width={300} height={48} border={12} />}
        {meals.length > 0 && !isLoading && (
          <S.Title>
            {category} Recipe{meals.length > 1 && 's'}
          </S.Title>
        )}
      </S.TitleWrapper>
      <S.CardStackMeals>
        {isLoading &&
          [...Array(8)].map((_, index) => (
            <Skeleton
              key={index}
              width={290}
              height={212}
              height2={36}
              spacing={10}
              border={20}
              border2={8}
            />
          ))}
        {meals?.map((item) => (
          <MealsCard {...item} key={item.idMeal} />
        ))}
      </S.CardStackMeals>
    </S.Section>
  );
}

export { CardStackMeals };
