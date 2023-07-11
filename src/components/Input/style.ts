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

  @media only screen and (max-device-width: 1024px) {
    transform: translateY(${({ up }) => (up ? '0px' : '70px')});
  }

  @media only screen and (max-device-width: 450px) {
    align-items: flex-start;
    margin: 28px 0;
    gap: 10px;
    transform: translateY(0px);
  }
`;

const InputContainer = styled.div`
  height: 56px;
  width: 50%;
  min-width: 350px;
  max-width: 600px;
  background-color: transparent;
  border: 3px solid #090e2a;
  border-radius: 16px 16px 7px;
  display: flex;
  align-items: center;
  padding: 0 20px;

  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-device-width: 1024px) {
    width: 47%;
  }

  @media only screen and (max-device-width: 450px) {
    width: 90%;
    padding: 0px 10px;
    margin: 0px auto;
    border-radius: 0;
    border-bottom: 2px solid #beb3b38f;

    &:hover {
      box-shadow: none;
    }

    &:focus-within {
      border-bottom: 1px solid var(--light-black);
    }
  }
`;

const Input = styled.input`
  width: 100%;
  font-size: 1.4rem;
  background-color: transparent;
  color: #040614;
  border: none;

  &::placeholder {
    color: #b3b19f;
  }

  &:focus {
    outline: none;
  }
`;

export { Section, InputContainer, Input };
