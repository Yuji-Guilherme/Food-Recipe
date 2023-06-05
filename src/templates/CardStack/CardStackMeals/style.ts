import styled from 'styled-components';

import {
  Section,
  Title,
  CardStack,
  ErrorMessage
} from '@/templates/CardStack/style';

const TitleMeals = styled(Title)`
  margin: 20px 0px 16px 24px;
`;

const CardStackMeals = styled(CardStack)`
  grid-template-columns: repeat(4, 1fr);
  row-gap: 40px;
`;

export { Section, TitleMeals, CardStackMeals, ErrorMessage };
