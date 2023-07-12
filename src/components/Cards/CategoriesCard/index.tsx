import { Categories } from '@/types';
import { useHandleNavigate } from '@/hooks/useHandleNavigate';

import * as S from './style';

function CategoriesCard({
  strCategory,
  strCategoryThumb
}: Partial<Categories>) {
  const { handleNavigate } = useHandleNavigate();
  const url = `/category/${strCategory}`;

  return (
    <S.CardCategories>
      <S.ImageCardCategories
        src={strCategoryThumb}
        onClick={() => handleNavigate(url)}
      />
      <S.TitleCardCategories onClick={() => handleNavigate(url)}>
        {strCategory}
      </S.TitleCardCategories>
    </S.CardCategories>
  );
}

export { CategoriesCard };
