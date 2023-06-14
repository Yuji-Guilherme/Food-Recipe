import styled from 'styled-components';
import { SecondaryTitle } from '@/templates/MealTemplate/style';

const IngredientSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  row-gap: 20px;
`;

const IngredientsWrapper = styled.ul`
  list-style: inside;
  line-height: 2.5;
  max-height: 420px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  column-gap: 50%;
`;

const Ingredient = styled.li`
  font-size: 1.6rem;
  color: #3f3e3e;
`;

export { IngredientSection, IngredientsWrapper, Ingredient, SecondaryTitle };
