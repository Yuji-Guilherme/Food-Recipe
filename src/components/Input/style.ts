import styled from 'styled-components';

const Container = styled.div`
  background-color: #fbfbfb;
  border: 1px solid transparent;
  border-radius: 24px;
  box-shadow: 0 2px 5px 1px rgb(64 60 67 / 16%);
  height: 50px;
  width: 50%;
  min-width: 350px;
  max-width: 600px;
  display: flex;
  align-items: center;
  padding: 0 20px;

  &:hover {
    cursor: pointer;
    box-shadow: 0 2px 5px 2px rgb(64 60 67 / 18%);
  }
`;

const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  font-size: 1.4rem;

  &::placeholder {
    color: #b8b2b2;
  }
  &:focus {
    outline: none;

    ~ button:last-of-type > svg {
      color: #434343;
    }
  }
`;

export { Container, Input };
