import styled from 'styled-components';

const Card = styled.li`
  height: auto;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
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
  color: var(--dark-blue-2);
  overflow-wrap: break-word;
`;

const Text = styled.p`
  font-size: 1.4rem;
  color: var(--light-grey-1);

  @media only screen and (max-device-width: 450px) {
    font-size: 1.6rem;
    color: var(--light-primary);
  }
`;

export { Card, ImageCard, TextCard, Title, Text };
