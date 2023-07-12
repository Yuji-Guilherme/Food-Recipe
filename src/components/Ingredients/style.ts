import styled from 'styled-components';
import { SecondaryTitle } from '@/templates/MealTemplate/style';

const IngredientSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  row-gap: 20px;

  @media only screen and (max-device-width: 1024px) {
    column-gap: 80px;
    margin-top: 12px;
  }
`;

const IngredientsWrapper = styled.ul`
  max-height: 480px;
  line-height: 2.5;
  list-style: inside;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  column-gap: 42px;

  @media only screen and (max-device-width: 1024px) {
    column-gap: 80px;
    padding-left: 32px;
  }

  @media only screen and (max-device-width: 450px) {
    max-height: max-content;
  }
`;

const Ingredient = styled.li`
  max-width: 300px;
  font-size: 1.6rem;
  color: var(--grey-text);
`;

export { IngredientSection, IngredientsWrapper, Ingredient, SecondaryTitle };
