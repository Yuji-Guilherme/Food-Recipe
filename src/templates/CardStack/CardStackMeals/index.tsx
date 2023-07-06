import * as S from './style';
import { useMealStore } from '@/store/meals';
import { MealsCard } from '@/components/Cards';
import { Skeleton } from '@/components/Skeleton';

type CardStackMealsProps = {
  category?: string;
};

function CardStackMeals({ category }: CardStackMealsProps) {
  const {
    state: { meals, isLoading, noMeals }
  } = useMealStore();

  return (
    <S.SectionMeals>
      {noMeals && <S.ErrorMessage>There are no recipes</S.ErrorMessage>}
      <S.TitleWrapper>
        {isLoading && (
          <Skeleton
            width={300}
            height={48}
            border={12}
            smallHeight={36}
            smWidthPercent={45}
          />
        )}
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
              border={30}
              border2={8}
              smallHeight={512}
              smWidthPercent={100}
            />
          ))}
        {meals?.map((item) => (
          <MealsCard {...item} key={item.idMeal} />
        ))}
      </S.CardStackMeals>
    </S.SectionMeals>
  );
}

export { CardStackMeals };
