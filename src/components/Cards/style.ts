import styled from 'styled-components';

const Card = styled.li`
  height: auto;
  display: flex;
  -webkit-box-align: center;
  flex-direction: column;
`;

const ImageCard = styled.img`
  width: auto;
  border-radius: 20px;
  object-fit: cover;

  &:hover {
    transform: scale(0.99);
    transition: 0.2s;
  }
`;

const TextCard = styled.div`
  padding: 4px 8px;
  width: fit-content;
`;

const Title = styled.h3`
  color: #3f3e3e;
  font-weight: 500;
  overflow-wrap: break-word;
`;

const Text = styled.p`
  font-size: 1.4rem;
  color: #717171;
`;

export { Card, ImageCard, TextCard, Title, Text };
