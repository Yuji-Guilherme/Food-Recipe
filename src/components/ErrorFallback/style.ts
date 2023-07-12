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
  color: var(--dark-blue-1);
  text-align: center;
`;

const Description = styled.p`
  max-width: 90%;
  font-size: 1.8rem;
  color: var(--dark-blue-2);
  text-align: center;
`;

const Button = styled.button`
  width: 118px;
  height: 50px;
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--dark-blue-2);
  background-color: transparent;
  border: 3px solid var(--dark-blue-2);
  border-radius: 14px 14px 14px 7px;

  &:hover {
    color: var(--light-primary);
    background-color: var(--dark-blue-2);
    transition: 0.3s;
  }
`;

export { Container, Title, Description, Button };
