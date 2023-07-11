import styled from 'styled-components';

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Title = styled.h1`
  font-size: 3.8rem;
  font-weight: 600;
  color: #090e2a;

  @media only screen and (max-device-width: 1024px) {
    font-size: 3rem;
  }

  @media only screen and (max-device-width: 450px) {
    font-size: 2.5rem;
    margin-left: 20px;
  }
`;

export { TitleWrapper, Title };
