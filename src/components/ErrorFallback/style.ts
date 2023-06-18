import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  color: var(--light-black);
`;

const Description = styled.p`
  font-size: 1.8rem;
  color: var(--light-black);
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
