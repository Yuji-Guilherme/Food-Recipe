import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  width: 765px;
  height: 425px;
  margin: 8% auto 0;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 80px;
  border: 16px solid #090e2a;

  @media only screen and (max-device-height: 1000px) {
    margin-top: 6%;
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
    padding: 7% 0;
    border-radius: 64px;
    border-width: 12px;
    flex-direction: column;
    justify-content: space-between;
  }

  @media only screen and (max-device-width: 375px) {
    width: 72%;
    height: 345px;
    padding: 5% 0;
    border-radius: 50px;
    border-width: 10px;
  }
`;

const Title = styled.h1`
  font-size: 10rem;
  line-height: 1.3;
  font-weight: 700;
  color: #090e2a;
  max-width: 350px;

  @media only screen and (max-device-width: 1024px) {
    font-size: 8.2rem;
    line-height: 1.4;
    max-width: 290px;
  }

  @media only screen and (max-device-width: 450px) {
    max-width: fit-content;
    text-align: center;
    font-size: 7rem;
    line-height: 1.3;
  }

  @media only screen and (max-device-width: 375px) {
    font-size: 5rem;
    line-height: 1.2;
  }
`;

const BtnContainer = styled.section`
  display: flex;
  width: 72%;
  align-items: center;
  justify-content: space-between;
  margin: 10% auto 0;

  @media only screen and (max-device-height: 1000px) {
    margin-top: 8%;
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
