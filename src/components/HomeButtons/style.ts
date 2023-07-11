import styled, { css } from 'styled-components';

type LogoProps = {
  svg: string;
};

const BtnC = styled.a`
  height: 88px;
  width: 88px;
  background-color: transparent;
  border: 6px solid #090e2a;
  border-radius: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;

  &:hover {
    background-color: #090e2a;

    > div {
      background-color: #fffdeb;
    }
  }
`;

const BtnR = styled.a`
  height: 88px;
  width: 368px;
  font-size: 3rem;
  background-color: transparent;
  color: #090e2a;
  font-weight: 600;
  border: 6px solid #090e2a;
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
    background-color: #090e2a;
    transition: 0.4s ease-out;
  }

  &:hover {
    color: #fffdeb;
    transition: 0.2s ease-in-out;

    ::before {
      width: 100%;
    }

    > div {
      background-color: #fffdeb;
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
`;

const ArrowL = styled.div<LogoProps>`
  ${({ svg }) => css`
    transform: rotate(-180deg);
    width: 88px;
    height: 26px;
    background-color: #090e2a;
    mask-image: url(${svg});
    mask-size: cover;
    transition: 0.2s ease-in-out;
  `}
`;

const ArrowR = styled(ArrowL)<LogoProps>`
  ${({ svg }) => css`
    transform: rotate(0);
    mask-image: url(${svg});
  `}
`;

const GitHubLogo = styled.div<LogoProps>`
  ${({ svg }) => css`
    height: 50px;
    width: 52px;
    background-color: #090e2a;
    mask-image: url(${svg});
    mask-size: cover;
    transition: 0.2s;
  `}
`;

export { GitHubLogo, BtnC, BtnR, BtnL, ArrowL, ArrowR };
