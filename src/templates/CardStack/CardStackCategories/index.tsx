import { MiniLogo } from '@/components/MiniLogo';
import { Skeleton } from '@/components/Skeleton';
import { CategoriesCard } from '@/components/Cards';
import { useCategories } from './hook';

import * as S from './style';

function CardStackCategories() {
  const { isLoading, categories } = useCategories();

  return (
    <S.SectionCategories>
      <S.TitleCategoriesWrapper>
        <MiniLogo width={24} height={22} />
        <S.TitleCategories>Categories</S.TitleCategories>
      </S.TitleCategoriesWrapper>
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
              smWidthPercent={88}
              smallHeight={82}
              smallHeight2={22}
            />
          ))}
        {categories?.map((item) => (
          <CategoriesCard {...item} key={item.idCategory} />
        ))}
      </S.CardStackCategories>
    </S.SectionCategories>
  );
}

export { CardStackCategories };
