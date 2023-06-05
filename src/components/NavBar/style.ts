import styled from 'styled-components';

const NavBar = styled.nav`
  width: 100%;
  height: 58px;
  background-color: white;
  box-shadow: rgb(220, 220, 220) 0px -1px 0px inset;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: center;
  gap: 60px;
`;

const Selector = styled.a`
  color: #959595;
  font-weight: 500;
  font-size: 1.4rem;

  &:hover {
    cursor: pointer;
  }
`;

export { NavBar, Selector };
