import { ICategories } from '@/types';
import * as S from './style';
import { useCategoriesCard } from './hook';

function CategoriesCard({
  strCategory,
  strCategoryThumb
}: Partial<ICategories>) {
  const { handleClick } = useCategoriesCard();

  return (
    <S.CardCategories>
      <S.ImageCardCategories
        src={strCategoryThumb}
        onClick={() => handleClick(strCategory)}
      />
      <S.TitleCardCategories onClick={() => handleClick(strCategory)}>
        {strCategory}
      </S.TitleCardCategories>
    </S.CardCategories>
  );
}

export { CategoriesCard };
