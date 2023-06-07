import styled from 'styled-components';

const NavBar = styled.nav`
  width: 100%;
  height: 62px;
  background-color: white;
  box-shadow: rgb(220, 220, 220) 0px -1px 0px inset;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: center;
  gap: 60px;

  & > a {
    color: #959595;
    font-weight: 500;
    font-size: 1.4rem;

    &:hover {
      cursor: pointer;
      color: #3f3e3e;
      transition: 0.2s;
    }

    &.active {
      color: #3f3e3e;
    }
  }
`;

export { NavBar };
