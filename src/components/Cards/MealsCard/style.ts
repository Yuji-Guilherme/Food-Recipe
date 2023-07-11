import styled from 'styled-components';

import {
  Card,
  ImageCard,
  Title,
  TextCard,
  Text
} from '@/components/Cards/style';

const CardMeals = styled(Card)`
  width: 290px;

  @media only screen and (max-device-width: 1024px) {
    width: 270px;
  }

  @media only screen and (max-device-width: 450px) {
    width: 100%;
    border-radius: 30px;
    background: linear-gradient(
      180deg,
      rgb(0 0 0 / 0%) 50%,
      rgb(0 0 0 / 60%) 100%
    );
    position: relative;
  }
`;

const ImageWrapper = styled.div`
  height: 212px;

  @media only screen and (max-device-width: 1024px) {
    height: 202px;
  }

  @media only screen and (max-device-width: 450px) {
    height: 512px;
    border-radius: 40px;
    position: relative;
  }
`;

const ImageCardMeals = styled(ImageCard)`
  width: 100%;
  height: 100%;
  cursor: pointer;

  @media only screen and (max-device-width: 450px) {
    position: relative;
    z-index: -1;
  }
`;

const TextMealsCard = styled(TextCard)`
  @media only screen and (max-device-width: 450px) {
    display: flex;
    flex-direction: column;
    padding: 12px;
    left: 8px;
    bottom: 20px;
    gap: 8px;
    position: absolute;
  }
`;

const TitleMeals = styled(Title)`
  font-size: 2.2rem;
  cursor: pointer;

  @media only screen and (max-device-width: 450px) {
    max-width: 270px;
    color: white;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-device-width: 450px) {
    width: fit-content;
    background-color: #ffffff29;
    padding: 4px 12px;
    border-radius: 12px;
  }
`;

const TextCategory = styled(Text)`
  margin-left: 4px;

  &:hover {
    cursor: pointer;
    color: #090e2a;
    transition: 0.5s;
  }
`;

export {
  CardMeals,
  ImageWrapper,
  ImageCardMeals,
  TitleMeals,
  TextMealsCard,
  TextWrapper,
  Text,
  TextCategory
};
