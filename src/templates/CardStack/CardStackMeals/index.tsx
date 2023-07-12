import { Skeleton } from '@/components/Skeleton';
import { MealsCard } from '@/components/Cards';
import { useMeals } from './hook';

import * as S from './style';

type CardStackMealsProps = {
  category?: string;
};

function CardStackMeals({ category }: CardStackMealsProps) {
  const { meals, isLoading, notFound } = useMeals(category);

  return (
    <S.SectionMeals>
      {notFound && <S.ErrorMessage>There are no recipes</S.ErrorMessage>}
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
        {meals!.length > 0 && !isLoading && (
          <S.Title>
            {category} Recipe{meals!.length > 1 && 's'}
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
