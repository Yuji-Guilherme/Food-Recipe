import { IMeal } from '@/types/IMeal';
import * as S from './style';

function Card({ strArea, strCategory, strMeal, strMealThumb }: Partial<IMeal>) {
  return (
    <S.Container>
      <S.ImageCard src={strMealThumb} />
      <S.TextCard>
        <S.Title>{strMeal}</S.Title>
        <S.Text>
          {strArea} / {strCategory}
        </S.Text>
      </S.TextCard>
    </S.Container>
  );
}

export { Card };
