import { NavLink } from 'react-router-dom';

import * as S from './style';

function NavBar() {
  return (
    <S.NavBar>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/categories">Categories</NavLink>
    </S.NavBar>
  );
}

export { NavBar };
