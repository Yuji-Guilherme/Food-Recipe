import styled from 'styled-components';

import {
  Section,
  Title,
  CardStack,
  ErrorMessage
} from '@/templates/CardStack/style';

const SectionMeals = styled(Section)`
  @media only screen and (max-device-width: 1400px) {
    margin: 24px 10px 80px;
  }
`;

const TitleWrapper = styled.div`
  width: 100%;
  margin: 0px 0px 32px 24px;

  @media only screen and (max-device-width: 1024px) {
    margin: 0 0 28px 32px;
  }

  @media only screen and (max-device-width: 450px) {
    margin: 0 0 32px 8px;
  }
`;

const CardStackMeals = styled(CardStack)`
  grid-template-columns: repeat(4, 1fr);
  row-gap: 40px;

  @media only screen and (max-device-width: 1220px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-device-width: 840px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-device-width: 450px) {
    width: 85%;
    display: flex;
    flex-direction: column;
    gap: 42px;
    margin: 0 auto;
  }
`;

export { SectionMeals, TitleWrapper, Title, CardStackMeals, ErrorMessage };
