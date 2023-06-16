import styled from 'styled-components';

import {
  Section,
  Title,
  CardStack,
  ErrorMessage
} from '@/templates/CardStack/style';

const TitleWrapper = styled.div`
  width: 100%;
  margin: 0px 0px 32px 24px;
`;

const CardStackMeals = styled(CardStack)`
  grid-template-columns: repeat(4, 1fr);
  row-gap: 40px;
`;

export { Section, TitleWrapper, Title, CardStackMeals, ErrorMessage };
