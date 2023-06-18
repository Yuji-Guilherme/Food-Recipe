import styled from 'styled-components';

type SectionProps = {
  up: boolean;
};

const Section = styled.section<SectionProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 72px 0;
  gap: 40px;
  transform: translateY(${({ up }) => (up ? '0px' : '100px')});
  transition: all 0.3s ease-out 0s;
`;

const Title = styled.h1`
  font-size: 3.8rem;
  font-weight: 600;
  color: var(--light-black);
`;

const Container = styled.div`
  height: 50px;
  width: 50%;
  min-width: 350px;
  max-width: 600px;
  background-color: var(--input-color);
  border: 1px solid transparent;
  border-radius: 24px;
  box-shadow: 0 2px 5px 1px rgb(64 60 67 / 16%);
  display: flex;
  align-items: center;
  padding: 0 20px;

  &:hover {
    box-shadow: 0 2px 5px 2px rgb(64 60 67 / 18%);
    cursor: pointer;
  }
`;

const Input = styled.input`
  width: 100%;
  font-size: 1.4rem;
  background-color: transparent;
  border: none;

  &::placeholder {
    color: var(--light-grey);
  }
  &:focus {
    outline: none;

    ~ button:last-of-type > svg {
      color: var(--light-black);
    }
  }
`;

export { Section, Title, Container, Input };
