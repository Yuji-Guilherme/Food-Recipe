import { SkeletonProps } from './types';

import styled, { css, keyframes } from 'styled-components';

type SkeletonContainerProps = Pick<
  SkeletonProps,
  'width' | 'spacing' | 'marginB' | 'smWidthPercent'
>;

type SkeletonContentProps = Pick<
  SkeletonProps,
  'height' | 'border' | 'smallHeight' | 'smallHeight2'
>;

const animation = keyframes`
 from { background-position-x: 0% }
 to { background-position-x: 135% }
`;

const SkeletonContainer = styled.div<SkeletonContainerProps>`
  ${({ width, spacing, marginB, smWidthPercent }) => css`
    width: ${width}px;
    display: flex;
    flex-direction: column;
    gap: ${spacing}px;
    margin-bottom: ${marginB}px;

    @media only screen and (max-device-width: 450px) {
      width: ${smWidthPercent ? `${smWidthPercent}%` : `${width}px`};
    }
  `}
`;

const SkeletonContent = styled.div<SkeletonContentProps>`
  ${({ height, border, smallHeight, smallHeight2 }) => css`
    width: 100%;
    height: ${height}px;
    border-radius: ${border}px;
    background: linear-gradient(-90deg, #eee 0%, #c7c7c7 50%, #eee 100%);
    background-size: 400% 400%;
    opacity: 0.5;
    animation: ${animation} 1.2s ease-in-out infinite;
    cursor: progress;

    @media only screen and (max-device-width: 450px) {
      height: ${smallHeight2 ? smallHeight2 : smallHeight}px;
    }
  `}
`;

export { SkeletonContainer, SkeletonContent };
