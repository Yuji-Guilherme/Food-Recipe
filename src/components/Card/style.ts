import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  height: 240px;
  width: 320px;
  border-radius: 7%;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const ImageCard = styled.img`
  height: 100%;
  width: 100%;
  border-radius: inherit;
  position: absolute;
  overflow: hidden;
  object-fit: cover;
`;

const Card = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  border-radius: inherit;
  padding-top: 48%;
  padding-left: 7%;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.65) 0%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const Title = styled.h3`
  font-size: 2.2rem;
  color: white;
`;

const TextWrapper = styled.div`
  margin-top: 8px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Text = styled.p`
  font-size: 1.4rem;
  max-width: 50%;
  color: white;
  background-color: #ffffff38;
  padding: 4px;
  border-radius: 3px;
`;

export { Container, ImageCard, Card, TextWrapper, Title, Text };
