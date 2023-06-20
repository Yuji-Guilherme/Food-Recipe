import styled from 'styled-components';

import {
  Section,
  Title,
  CardStack,
  ErrorMessage
} from '@/templates/CardStack/style';

const SectionCategories = styled(Section)`
  @media only screen and (max-device-width: 1024px) {
    margin: 24px 28px 80px;
  }
`;

const TitleCategories = styled(Title)`
  margin: 24px 0px 32px 24px;

  @media only screen and (max-device-width: 1024px) {
    font-size: 2.8rem;
    margin: 0 0 32px 32px;
  }

  @media only screen and (max-device-width: 450px) {
    font-size: 2rem;
    margin: 24px 0;
  }
`;

const CardStackCategories = styled(CardStack)`
  grid-template-columns: repeat(5, 1fr);
  row-gap: 50px;

  @media only screen and (max-device-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    row-gap: 36px;
  }

  @media only screen and (max-device-width: 450px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export {
  SectionCategories,
  TitleCategories,
  CardStackCategories,
  ErrorMessage
};
