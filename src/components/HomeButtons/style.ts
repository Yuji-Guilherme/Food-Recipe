import styled, { css } from 'styled-components';

type LogoProps = {
  svg: string;
};

const BtnR = styled.a`
  height: 88px;
  width: 368px;
  font-size: 3rem;
  background-color: transparent;
  color: var(--dark-blue-1);
  font-weight: 600;
  border: 6px solid var(--dark-blue-1);
  border-radius: 26px 26px 12px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-evenly;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 102%;
    z-index: -1;
    border-radius: 16px 16px 2px;
    background-color: var(--dark-blue-1);
    transition: 0.4s ease-out;
  }

  &:hover {
    color: var(--light-primary);
    transition: 0.2s ease-in-out;

    ::before {
      width: 100%;
    }

    > div {
      background-color: var(--light-primary);
    }
  }

  @media only screen and (max-device-width: 1024px) {
    height: 80px;
    width: 286px;
    font-size: 2rem;
    border-width: 5px;
  }

  @media only screen and (max-device-width: 768px) {
    height: 76px;
    width: 270px;
  }

  @media only screen and (max-device-width: 450px) {
    height: 80px;
    width: 100%;
    font-size: 2.6rem;
    border-width: 7px;
    border-radius: 22px 22px 8px;
  }

  @media only screen and (max-device-width: 375px) {
    height: 70px;
    font-size: 2rem;
    border-radius: 20px 20px 8px;
    border-width: 5px;

    &:hover {
      color: var(--dark-blue-1);

      ::before {
        width: 0%;
      }

      > div {
        background-color: var(--dark-blue-1);
      }
    }
  }
`;

const BtnL = styled(BtnR)`
  justify-content: start;
  border-radius: 26px 26px 26px 12px;
  padding-left: 30px;
  gap: 46px;

  &::before {
    left: auto;
    right: 0;
    border-radius: 16px 16px 16px 2px;
  }

  @media only screen and (max-device-width: 1024px) {
    padding-left: 26px;
    gap: 40px;
  }

  @media only screen and (max-device-width: 450px) {
    background-color: var(--dark-blue-1);
    color: var(--light-primary);
    border-radius: 22px 22px 22px 8px;
  }

  @media only screen and (max-device-width: 375px) {
    border-radius: 20px 20px 20px 8px;
  }
`;

const ArrowL = styled.div<LogoProps>`
  ${({ svg }) => css`
    transform: rotate(-180deg);
    width: 88px;
    height: 26px;
    background-color: var(--dark-blue-1);
    mask-image: url(${svg});
    mask-size: cover;
    transition: 0.2s ease-in-out;

    @media only screen and (max-device-width: 1024px) {
      width: 70px;
      height: 21px;
    }

    @media only screen and (max-device-width: 450px) {
      width: 83px;
      height: 25px;
      background-color: var(--light-primary);
    }

    @media only screen and (max-device-width: 375px) {
      width: 72px;
      height: 21px;
    }
  `}
`;

const ArrowR = styled(ArrowL)<LogoProps>`
  ${({ svg }) => css`
    transform: rotate(0);
    mask-image: url(${svg});

    @media only screen and (max-device-width: 450px) {
      background-color: var(--dark-blue-1);
    }
  `}
`;

const BtnC = styled.a`
  height: 88px;
  width: 88px;
  background-color: transparent;
  border: 6px solid var(--dark-blue-1);
  border-radius: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;

  &:hover {
    background-color: var(--dark-blue-1);

    > div {
      background-color: var(--light-primary);
    }
  }

  @media only screen and (max-device-width: 1024px) {
    height: 80px;
    width: 80px;
    border-width: 5px;
  }

  @media only screen and (max-device-width: 768px) {
    height: 76px;
    width: 76px;
  }

  @media only screen and (max-device-width: 450px) {
    height: 80px;
    width: 80px;
    grid-area: 3;
  }

  @media only screen and (max-device-width: 375px) {
    width: 70px;
    height: 70px;
    border-radius: 24px;
  }
`;

const GitHubLogo = styled.div<LogoProps>`
  ${({ svg }) => css`
    width: 52px;
    height: 50px;
    background-color: var(--dark-blue-1);
    mask-image: url(${svg});
    mask-size: cover;
    transition: 0.2s;

    @media only screen and (max-device-width: 1024px) {
      width: 43px;
      height: 41px;
    }
  `}
`;

export { GitHubLogo, BtnC, BtnR, BtnL, ArrowL, ArrowR };
