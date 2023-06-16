import { CategoriesCard } from '@/components/Cards/CategoriesCard';
import { Skeleton } from '@/components/Skeleton';
import { useCategories } from './hook';
import * as S from './style';

function CardStackCategories() {
  const { isLoading, categories } = useCategories();

  return (
    <S.Section>
      <S.TitleCategories>Categories</S.TitleCategories>
      <S.CardStackCategories>
        {isLoading &&
          [...Array(14)].map((_, index) => (
            <Skeleton
              key={index}
              width={202}
              height={128}
              height2={30}
              spacing={10}
              border={20}
              border2={8}
            />
          ))}
        {categories?.map((item) => (
          <CategoriesCard {...item} key={item.idCategory} />
        ))}
      </S.CardStackCategories>
    </S.Section>
  );
}

export { CardStackCategories };
