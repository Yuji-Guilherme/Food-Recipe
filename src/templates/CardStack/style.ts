import styled from 'styled-components';

const Section = styled.section`
  margin: 24px 80px 80px;
`;

const Title = styled.h2`
  font-size: 3.2rem;
  font-weight: 600;
  color: #090e2a;

  @media only screen and (max-device-width: 450px) {
    font-size: 2.2rem;
  }
`;

const CardStack = styled.ul`
  width: 100%;
  display: grid;
  justify-items: center;
`;

const ErrorMessage = styled.h3`
  width: fit-content;
  font-size: 1.8rem;
  font-weight: 500;
  color: #090e2a;
  margin: 40px auto 0;
`;

export { Section, Title, CardStack, ErrorMessage };
