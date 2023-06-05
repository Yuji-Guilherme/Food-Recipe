import { ICategories } from '@/types/ICategories';
import * as S from './style';

function CategoriesCard({
  strCategory,
  strCategoryThumb
}: Partial<ICategories>) {
  return (
    <S.CardCategories>
      <S.ImageCardCategories src={strCategoryThumb} />
      <S.TitleCardCategories>{strCategory}</S.TitleCardCategories>
    </S.CardCategories>
  );
}

export { CategoriesCard };
