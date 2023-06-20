import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  top: 0px;
  position: sticky;
  z-index: 99;

  @media only screen and (max-device-width: 450px) {
    top: auto;
    bottom: 0px;
    position: fixed;
  }
`;

export { Header };
