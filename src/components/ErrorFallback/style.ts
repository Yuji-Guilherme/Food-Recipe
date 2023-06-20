import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20vh;
  gap: 20px;
`;

const Title = styled.h1`
  max-width: 90%;
  font-size: 3rem;
  font-weight: 500;
  color: var(--light-black);
  text-align: center;
`;

const Description = styled.p`
  max-width: 90%;
  font-size: 1.8rem;
  color: var(--light-black);
  text-align: center;
`;

const Button = styled.button`
  font-size: 1.6rem;
  color: var(--light-black);
  background-color: transparent;
  padding: 8px;
  border: 2px solid var(--light-black);
  border-radius: 8px;

  &:hover {
    color: white;
    background-color: var(--light-black);
    transition: 0.3s;
  }
`;

export { Container, Title, Description, Button };
