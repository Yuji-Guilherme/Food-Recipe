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
    font-weight: 500;
    font-size: 1.4rem;
    color: var(--medium-grey);

    &:hover {
      color: var(--light-black);
      transition: 0.2s;
      cursor: pointer;
    }

    &.active {
      color: var(--light-black);
    }
  }

  @media only screen and (max-device-width: 450px) {
    box-shadow: rgb(220, 220, 220) 0px 1px 0px inset;
  }
`;

export { NavBar };
