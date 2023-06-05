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
`;

const TitleMeals = styled(Title)`
  font-size: 2.2rem;
`;

export { CardMeals, ImageCardMeals, TitleMeals, TextCard, Text };
