import styled from 'styled-components';

const PageWrapper = styled.div`
  @media only screen and (max-device-width: 450px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export { PageWrapper };
