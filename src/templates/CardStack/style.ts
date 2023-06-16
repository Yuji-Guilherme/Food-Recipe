import styled from 'styled-components';

const Section = styled.section`
  margin: 24px 80px 80px;
`;

const Title = styled.h2`
  font-size: 3.2rem;
  color: #3f3e3e;
  font-weight: 600;
`;

const CardStack = styled.ul`
  width: 100%;
  display: grid;
  justify-items: center;
`;

const ErrorMessage = styled.h3`
  width: fit-content;
  margin: 40px auto 0;
  font-size: 1.8rem;
  color: #3f3e3e;
  font-weight: 500;
`;

export { Section, Title, CardStack, ErrorMessage };
