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
  width: fit-content;
  padding: 4px 8px;
`;

const Title = styled.h3`
  font-weight: 500;
  color: #0a1030;
  overflow-wrap: break-word;
`;

const Text = styled.p`
  font-size: 1.4rem;
  color: #586084;

  @media only screen and (max-device-width: 450px) {
    font-size: 1.6rem;
    color: white;
  }
`;

export { Card, ImageCard, TextCard, Title, Text };
