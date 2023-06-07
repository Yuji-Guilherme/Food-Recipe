import * as S from './style';

import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <S.NavBar>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/categories">Categories</NavLink>
    </S.NavBar>
  );
}

export { NavBar };
