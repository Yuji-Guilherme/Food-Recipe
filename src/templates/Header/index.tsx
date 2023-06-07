import { Outlet } from 'react-router-dom';

import * as S from './style';

import { NavBar } from '@/components/NavBar';

function Header() {
  return (
    <>
      <S.Header>
        <NavBar />
      </S.Header>
      <Outlet />
    </>
  );
}

export { Header };
