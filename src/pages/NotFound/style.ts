import styled from 'styled-components';

const Main = styled.main`
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 14vh;
  gap: 50px;
`;

const TextWrapper = styled.div`
  width: 300px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 10rem;
  font-weight: 700;
  color: var(--dark-blue-1);
`;

const SubTitle = styled.h2`
  font-size: 4.5rem;
  font-weight: 500;
  color: var(--dark-blue-2);
`;

const Button = styled.button`
  height: 72px;
  width: 260px;
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--dark-blue-2);
  background-color: transparent;
  border: 4px solid var(--dark-blue-2);
  border-radius: 20px 20px 20px 8px;

  &:hover {
    color: var(--light-primary);
    background-color: var(--dark-blue-2);
    transition: 0.3s;
  }
`;

export { Main, Container, TextWrapper, Title, SubTitle, Button };
