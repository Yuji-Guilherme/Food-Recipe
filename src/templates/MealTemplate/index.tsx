import { Skeleton } from '@/components/Skeleton';
import { Ingredients } from '@/components/Ingredients';
import { useTags } from '@/hooks/useTags';
import { useMealTemplate } from './hook';

import * as S from './style';

type MealTemplateProps = {
  mealId: string;
};

function MealTemplate({ mealId }: MealTemplateProps) {
  const {
    noMeal,
    isLoading,
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
        {noMeal && <S.ErrorMessage>No recipe</S.ErrorMessage>}
        <S.TextWrapper>
          {isLoading && <Skeleton width={600} height={50} border={10} />}
          <S.Title>{strMeal}</S.Title>
          <S.TagWrapper>
            {strArea && strCategory && (
              <>
                <S.Tag>{strArea} /</S.Tag>
                <S.TagCategory onClick={() => handleNavigate(strCategory!)}>
                  {strCategory}
                </S.TagCategory>
              </>
            )}
          </S.TagWrapper>
        </S.TextWrapper>
        <S.ImageWrapper>
          {isLoading && <Skeleton width={650} height={500} border={20} />}
          {!isLoading && <S.Image src={strMealThumb} />}
        </S.ImageWrapper>
        {isLoading && (
          <div>
            <Skeleton width={160} height={40} border={10} marginB={20} />
            <Skeleton
              width={234}
              height={30}
              border={10}
              lines={8}
              spacing={12}
            />
          </div>
        )}
        {mealInfo && <Ingredients meal={mealInfo} />}
        <S.InstructionSection>
          {isLoading && (
            <>
              <Skeleton width={170} height={38} border={10} />
              <Skeleton
                width={1200}
                height={20}
                border={8}
                lines={4}
                spacing={12}
              />
            </>
          )}
          {!isLoading && (
            <>
              <S.SecondaryTitle>Instructions</S.SecondaryTitle>
              <S.Instruction>{strInstructions}</S.Instruction>
            </>
          )}
        </S.InstructionSection>
      </S.Section>
    </>
  );
}

export { MealTemplate };
