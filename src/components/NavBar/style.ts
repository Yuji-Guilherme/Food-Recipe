import styled from 'styled-components';

const NavBar = styled.nav`
  width: 94%;
  margin: 0 auto;
  height: 68px;
  background-color: var(--body-color);
  box-shadow: var(--dark-blue-1) 0px -1px 0px inset;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: center;
  gap: 72px;

  & > a {
    font-weight: 500;
    font-size: 1.4rem;
    color: var(--light-grey-1);

    &:hover {
      color: var(--dark-blue-1);
      transition: 0.2s;
      cursor: pointer;
    }

    &.active {
      color: var(--dark-blue-1);
    }
  }

  @media only screen and (max-device-width: 450px) {
    height: 56px;
    box-shadow: var(--light-grey-1) 0px 1px 0px inset;
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
