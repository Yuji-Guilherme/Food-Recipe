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
  color: #090e2a;
`;

const SubTitle = styled.h2`
  font-size: 4.5rem;
  font-weight: 500;
  color: #0a1030;
`;

const Button = styled.button`
  height: 72px;
  width: 260px;
  font-size: 1.8rem;
  font-weight: 600;
  color: #0a1030;
  background-color: transparent;
  border: 4px solid #0a1030;
  border-radius: 20px 20px 20px 8px;

  &:hover {
    color: #fffdeb;
    background-color: #0a1030;
    transition: 0.3s;
  }
`;

export { Main, Container, TextWrapper, Title, SubTitle, Button };
