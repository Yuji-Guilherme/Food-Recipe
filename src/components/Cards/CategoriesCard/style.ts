import styled from 'styled-components';

import { Card, ImageCard, Title } from '@/components/Cards/style';

const CardCategories = styled(Card)`
  width: 202px;
  gap: 10px;

  @media only screen and (max-device-width: 1024px) {
    width: 180px;
  }

  @media only screen and (max-device-width: 450px) {
    width: 136px;
  }
`;

const ImageCardCategories = styled(ImageCard)`
  height: 128px;
  background-color: rgba(0, 0, 0, 0.04);
  cursor: pointer;

  @media only screen and (max-device-width: 1024px) {
    height: 116px;
  }

  @media only screen and (max-device-width: 450px) {
    height: 82px;
  }
`;

const TitleCardCategories = styled(Title)`
  font-size: 2rem;
  cursor: pointer;

  @media only screen and (max-device-width: 450px) {
    font-size: 1.6rem;
  }
`;

export { CardCategories, ImageCardCategories, TitleCardCategories };
