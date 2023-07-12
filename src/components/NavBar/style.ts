import styled from 'styled-components';

const NavBar = styled.nav`
  width: 94%;
  margin: 0 auto;
  height: 68px;
  background-color: var(--body-color);
  box-shadow: #090e2a 0px -1px 0px inset;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: center;
  gap: 72px;

  & > a {
    font-weight: 500;
    font-size: 1.4rem;
    color: #586084;

    &:hover {
      color: #090e2a;
      transition: 0.2s;
      cursor: pointer;
    }

    &.active {
      color: #090e2a;
    }
  }

  @media only screen and (max-device-width: 450px) {
    height: 56px;
    box-shadow: #586084 0px 1px 0px inset;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    justify-items: center;
    gap: 2px;
    justify-content: space-around;

    & > a {
      width: fit-content;
    }
  }
`;

export { NavBar };
