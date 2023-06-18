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
  grid-column: 1/3;
  gap: 16px;
`;

const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 600;
  color: var(--light-black);
`;

const TagWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Tag = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--dark-grey);
`;

const TagCategory = styled(Tag)`
  margin-left: 4px;
  position: relative;
  &:hover {
    color: var(--light-black);
    transition: 0.5s;
    cursor: pointer;
  }
`;

const ImageWrapper = styled.div`
  width: 650px;
  height: 500px;
  margin-top: 8px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
`;

const SecondaryTitle = styled.h2`
  width: 100%;
  font-size: 2.6rem;
  font-weight: 600;
  color: var(--light-black);
`;

const InstructionSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-column: 1/3;
  margin-top: 10px;
  margin-left: 8px;
  gap: 16px;
`;

const Instruction = styled.p`
  font-size: 1.6rem;
  color: var(--light-black);
`;

const ErrorMessage = styled.h3`
  width: fit-content;
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--light-black);
  margin: 40px auto 0;
`;

export {
  Section,
  ImageWrapper,
  Image,
  TextWrapper,
  Title,
  SecondaryTitle,
  TagWrapper,
  Tag,
  TagCategory,
  InstructionSection,
  Instruction,
  ErrorMessage
};
