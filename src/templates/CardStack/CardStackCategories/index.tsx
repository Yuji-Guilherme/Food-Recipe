import { CategoriesCard } from '@/components/Cards/CategoriesCard';
import { useCategories } from './hook';
import * as S from './style';

function CardStackCategories() {
  const { categories } = useCategories();
  return (
    <S.Section>
      <S.TitleCategories>Categories</S.TitleCategories>
      <S.CardStackCategories>
        {categories?.map((item) => (
          <CategoriesCard {...item} key={item.idCategory} />
        ))}
      </S.CardStackCategories>
    </S.Section>
  );
}

export { CardStackCategories };
