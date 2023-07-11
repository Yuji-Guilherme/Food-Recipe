import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20vh;
  gap: 22px;
`;

const Title = styled.h1`
  max-width: 90%;
  font-size: 3rem;
  font-weight: 500;
  color: #090e2a;
  text-align: center;
`;

const Description = styled.p`
  max-width: 90%;
  font-size: 1.8rem;
  color: #0a1030;
  text-align: center;
`;

const Button = styled.button`
  width: 118px;
  height: 50px;
  font-size: 1.6rem;
  font-weight: 500;
  color: #0a1030;
  background-color: transparent;
  border: 3px solid #0a1030;
  border-radius: 14px 14px 14px 7px;

  &:hover {
    color: #fffdeb;
    background-color: #0a1030;
    transition: 0.3s;
  }
`;

export { Container, Title, Description, Button };
