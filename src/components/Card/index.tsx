import { IMeal } from '@/types/IMeal';
import * as S from './style';

function Card({ strArea, strCategory, strMeal, strMealThumb }: Partial<IMeal>) {
  return (
    <S.Container>
      <S.ImageCard src={strMealThumb} />
      <S.Card>
        <S.Title>{strMeal}</S.Title>
        <S.TextWrapper>
          <S.Text>{strArea}</S.Text>
          <S.Text>{strCategory}</S.Text>
        </S.TextWrapper>
      </S.Card>
    </S.Container>
  );
}

export { Card };
