import styled from 'styled-components';

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 25px 80px 80px;
  gap: 20px 90px;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 16px;
  grid-column: 1/3;
`;

const Title = styled.h1`
  font-size: 3.2rem;
  color: #3f3e3e;
  font-weight: 600;
`;

const Tags = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  color: #717171;
`;

const Image = styled.img`
  width: 650px;
  height: 500px;
  border-radius: 20px;
  object-fit: cover;
  margin-top: 8px;
`;

const SecondaryTitle = styled.h2`
  font-size: 2.6rem;
  color: #3f3e3e;
  font-weight: 600;
  width: 100%;
`;

const InstructionSection = styled.section`
  width: 100%;
  margin-top: 10px;
  margin-left: 8px;
  grid-column: 1/3;
`;

const Instruction = styled.p`
  font-size: 1.6rem;
  color: #3f3e3e;
  margin-top: 16px;
`;

const ErrorMessage = styled.h3`
  width: fit-content;
  margin: 40px auto 0;
  font-size: 1.8rem;
  color: #3f3e3e;
  font-weight: 500;
`;

export {
  Section,
  Image,
  TextWrapper,
  Title,
  SecondaryTitle,
  Tags,
  InstructionSection,
  Instruction,
  ErrorMessage
};
