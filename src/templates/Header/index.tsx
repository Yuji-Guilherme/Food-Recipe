import { NavBar } from '@/components/NavBar';
import { ErrorFallback } from '@/components/ErrorFallback';

import { Outlet, ScrollRestoration } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import * as S from './style';

function Header() {
  return (
    <>
      <S.Header>
        <NavBar />
      </S.Header>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ScrollRestoration />
        <Outlet />
      </ErrorBoundary>
    </>
  );
}

export { Header };
