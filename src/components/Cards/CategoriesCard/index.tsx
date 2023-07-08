import { Categories } from '@/types';
import { useCategoriesCard } from './hook';

import * as S from './style';

function CategoriesCard({
  strCategory,
  strCategoryThumb
}: Partial<Categories>) {
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
