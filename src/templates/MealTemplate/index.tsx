import { Ingredients } from '@/components/Ingredients';
import { useMealTemplate } from './hook';
import { useTags } from '@/hooks/useTags';
import * as S from './style';

type MealTemplateProps = {
  mealId: string;
};

function MealTemplate({ mealId }: MealTemplateProps) {
  const {
    err,
    strInstructions,
    strMeal,
    strMealThumb,
    strArea,
    strCategory,
    mealInfo
  } = useMealTemplate(mealId);

  const { handleNavigate } = useTags();

  return (
    <>
      <S.Section>
        {err && <S.ErrorMessage>No recipe</S.ErrorMessage>}
        <S.TextWrapper>
          <S.Title>{strMeal}</S.Title>
          <S.TagWrapper>
            <S.Tag>{strArea} /</S.Tag>
            <S.TagCategory onClick={() => handleNavigate(strCategory!)}>
              {strCategory}
            </S.TagCategory>
          </S.TagWrapper>
        </S.TextWrapper>
        <S.Image src={strMealThumb} />
        {mealInfo && <Ingredients meal={mealInfo} />}
        <S.InstructionSection>
          <S.SecondaryTitle>Instructions</S.SecondaryTitle>
          <S.Instruction>{strInstructions}</S.Instruction>
        </S.InstructionSection>
      </S.Section>
    </>
  );
}

export { MealTemplate };
