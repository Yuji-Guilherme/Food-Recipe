import styled from 'styled-components';

const Container = styled.div`
  height: auto;
  width: 290px;
  display: flex;
  -webkit-box-align: center;
  flex-direction: column;

  &:hover {
    cursor: pointer;
  }
`;

const ImageCard = styled.img`
  height: 212px;
  width: auto;
  border-radius: 20px;
  object-fit: cover;

  &:hover {
    transform: scale(1.02);
    transition: 0.2s;
  }
`;

const TextCard = styled.div`
  padding: 2px 6px;
`;

const Title = styled.h3`
  color: #373737;
  font-size: 2rem;
  font-weight: 600;
  overflow-wrap: break-word;
`;

const Text = styled.p`
  font-size: 1.4rem;

  font-weight: 500;
  color: #b8b2b2;
`;

export { Container, ImageCard, TextCard, Title, Text };
