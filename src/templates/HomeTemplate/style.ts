import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  width: 765px;
  height: 425px;
  margin: 8% auto 0;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 80px;
  border: 16px solid #090e2a;
`;

const Title = styled.h1`
  font-size: 10rem;
  line-height: 1.3;
  font-weight: 700;
  color: #090e2a;
  max-width: 350px;
`;

const BtnContainer = styled.section`
  display: flex;
  width: 72%;
  align-items: center;
  justify-content: space-between;
  margin: 10% auto 0;
`;

export { Container, Title, BtnContainer };
