import styled from 'styled-components';

import { ErrorMessage } from '@/templates/CardStack/style';

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 90px;
  margin: 25px 80px 80px;

  @media only screen and (max-device-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 36px;
  }

  @media only screen and (max-device-width: 450px) {
    gap: 28px;
    margin: 24px 10px 80px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: baseline;
  grid-column: 1/3;
  gap: 16px;

  @media only screen and (max-device-width: 1024px) {
    align-self: center;
  }

  @media only screen and (max-device-width: 450px) {
    width: 90%;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
`;

const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 600;
  color: var(--dark-blue-2);

  @media only screen and (max-device-width: 1024px) {
    font-size: 2.8rem;
  }

  @media only screen and (max-device-width: 450px) {
    font-size: 2.5rem;
  }
`;

const TagWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Tag = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--grey-tags);
`;

const TagCategory = styled(Tag)`
  margin-left: 4px;
  position: relative;

  &:hover {
    color: var(--dark-blue-1);
    transition: 0.5s;
    cursor: pointer;
  }
`;

const ImageWrapper = styled.div`
  width: 650px;
  height: 500px;
  margin-top: 8px;

  @media only screen and (max-device-width: 1024px) {
    width: 700px;
    align-self: center;
    margin: 0px;
  }

  @media only screen and (max-device-width: 450px) {
    width: 96%;
    height: 280px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;

  @media only screen and (max-device-width: 1024px) {
    border-radius: 50px;
  }

  @media only screen and (max-device-width: 450px) {
    border-radius: 40px;
  }
`;

const SecondaryTitle = styled.h2`
  width: 100%;
  font-size: 2.6rem;
  font-weight: 600;
  color: var(--light-grey-2);

  @media only screen and (max-device-width: 450px) {
    font-size: 2.2rem;
    margin-left: 4px;
  }
`;

const InstructionSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-column: 1/3;
  gap: 16px;
  margin-top: 10px;
  margin-left: 8px;

  @media only screen and (max-device-width: 450px) {
    align-self: center;
  }
`;

const Instruction = styled.p`
  font-size: 1.6rem;
  color: var(--grey-text);

  @media only screen and (max-device-width: 450px) {
    padding: 0 16px;
  }
`;

const ErrorMessageMealTemplate = styled(ErrorMessage)`
  grid-area: 1/1/4/3;
  margin: 80px auto 0;
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
  ErrorMessageMealTemplate
};
