import styled, { css } from 'styled-components';
import { MiniLogoProps } from '.';

type LogoProps = {
  svg: string;
} & MiniLogoProps;

const MiniLogo = styled.div<LogoProps>`
  ${({ svg, width, height }) => css`
    width: ${width}px;
    height: ${height}px;
    background-color: #090e2a;
    mask-image: url(${svg});
    mask-size: cover;
  `}
`;

export { MiniLogo };
