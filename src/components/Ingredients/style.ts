import styled from 'styled-components';
import { SecondaryTitle } from '@/templates/MealTemplate/style';

const IngredientSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  row-gap: 20px;
`;

const IngredientsWrapper = styled.ul`
  max-height: 480px;
  line-height: 2.5;
  list-style: inside;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  column-gap: 42px;
`;

const Ingredient = styled.li`
  max-width: 300px;
  font-size: 1.6rem;
  color: var(--light-black);
`;

export { IngredientSection, IngredientsWrapper, Ingredient, SecondaryTitle };
