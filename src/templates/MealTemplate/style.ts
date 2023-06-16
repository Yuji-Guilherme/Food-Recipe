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

const TagWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Tag = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  color: #717171;
`;

const TagCategory = styled(Tag)`
  margin-left: 4px;
  position: relative;
  &:hover {
    cursor: pointer;
    color: #3f3e3e;
    transition: 0.5s;
    :after {
      width: 100%;
      left: 0;
      background: #3f3e3e;
    }
  }
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    display: block;
    right: 0;
    transition: width 0.2s ease;
    -webkit-transition: width 0.2s ease;
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
  font-size: 2.6rem;
  color: #3f3e3e;
  font-weight: 600;
  width: 100%;
`;

const InstructionSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  margin-left: 8px;
  gap: 16px;
  grid-column: 1/3;
`;

const Instruction = styled.p`
  font-size: 1.6rem;
  color: #3f3e3e;
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
