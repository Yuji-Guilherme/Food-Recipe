import { ReactNode } from 'react';

import * as S from './style';

type PageWrapperProps = {
  children: ReactNode;
};

function PageWrapper({ children }: PageWrapperProps) {
  return <S.PageWrapper>{children}</S.PageWrapper>;
}

export { PageWrapper };
