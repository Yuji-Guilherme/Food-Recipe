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
`;

const ImageCardMeals = styled(ImageCard)`
  height: 212px;
  cursor: pointer;
`;

const TitleMeals = styled(Title)`
  font-size: 2.2rem;
  cursor: pointer;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TextCategory = styled(Text)`
  margin-left: 4px;
  &:hover {
    cursor: pointer;
    color: var(--light-black);
    transition: 0.5s;
  }
`;

export {
  CardMeals,
  ImageCardMeals,
  TitleMeals,
  TextCard,
  TextWrapper,
  Text,
  TextCategory
};
