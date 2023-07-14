import styled from 'styled-components';

const Container = styled.section`
  width: 765px;
  height: 425px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 16px solid var(--dark-blue-1);
  border-radius: 80px;
  margin: 8% auto 0;

  @media only screen and (max-device-height: 1000px) {
    margin-top: 4%;
  }

  @media only screen and (max-device-width: 1024px) {
    width: 640px;
    height: 375px;
  }

  @media only screen and (max-device-width: 768px) {
    width: 610px;
    height: 360px;
  }

  @media only screen and (max-device-width: 450px) {
    width: 84%;
    height: 50%;
    flex-direction: column;
    justify-content: space-between;
    border-width: 12px;
    border-radius: 64px;
    padding: 7% 0;
  }

  @media only screen and (max-device-width: 375px) {
    width: 72%;
    height: 345px;
    border-width: 10px;
    border-radius: 50px;
    padding: 5% 0;
  }
`;

const Title = styled.h1`
  max-width: 350px;
  font-size: 10rem;
  font-weight: 700;
  line-height: 1.3;
  color: var(--dark-blue-1);

  @media only screen and (max-device-width: 1024px) {
    max-width: 290px;
    font-size: 8.2rem;
    line-height: 1.4;
  }

  @media only screen and (max-device-width: 450px) {
    max-width: fit-content;
    font-size: 7rem;
    line-height: 1.3;
    text-align: center;
  }

  @media only screen and (max-device-width: 375px) {
    font-size: 5rem;
    line-height: 1.2;
  }
`;

const BtnContainer = styled.section`
  width: 72%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10% auto 0;

  @media only screen and (max-device-height: 1000px) {
    margin-top: 7%;
    margin-bottom: 50px;
  }

  @media only screen and (max-device-width: 768px) {
    width: 84%;
  }

  @media only screen and (max-device-width: 450px) {
    width: 78%;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 28px;
    margin-bottom: 28px;
  }

  @media only screen and (max-device-width: 375px) {
    width: 74%;
    gap: 22px;
    margin-bottom: 22px;
  }
`;

export { Container, Title, BtnContainer };
