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
  font-weight: 600;
  color: var(--light-black);
`;

const SubTitle = styled.h2`
  font-size: 4.5rem;
  font-weight: 500;
  color: var(--light-black);
`;

const Button = styled.button`
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--light-black);
  background-color: transparent;
  padding: 12px;
  border: 2px solid var(--light-black);
  border-radius: 8px;

  &:hover {
    color: white;
    background-color: var(--light-black);
    transition: 0.3s;
  }
`;

export { Main, Container, TextWrapper, Title, SubTitle, Button };
