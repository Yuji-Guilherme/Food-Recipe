import styled from 'styled-components';

import { Card, ImageCard, Title } from '@/components/Cards/style';

const CardCategories = styled(Card)`
  width: 202px;
  gap: 10px;
`;

const ImageCardCategories = styled(ImageCard)`
  height: 128px;
  background-color: rgba(0, 0, 0, 0.04);
`;

const TitleCardCategories = styled(Title)`
  font-size: 2rem;
`;

export { CardCategories, ImageCardCategories, TitleCardCategories };
