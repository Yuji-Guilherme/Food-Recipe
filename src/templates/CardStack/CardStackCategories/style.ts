import styled from 'styled-components';

import {
  Section,
  Title,
  CardStack,
  ErrorMessage
} from '@/templates/CardStack/style';

const TitleCategories = styled(Title)`
  margin: 24px 0px 32px 24px;
`;

const CardStackCategories = styled(CardStack)`
  grid-template-columns: repeat(5, 1fr);
  row-gap: 50px;
`;

export { Section, TitleCategories, CardStackCategories, ErrorMessage };
