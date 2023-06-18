import { SkeletonProps } from '.';

import styled, { css, keyframes } from 'styled-components';

type SkeletonContainerProps = Pick<
  SkeletonProps,
  'width' | 'spacing' | 'marginB'
>;

type SkeletonContentProps = Pick<SkeletonProps, 'height' | 'border'>;

const animation = keyframes`
 from { background-position-x: 0% }
 to { background-position-x: 135% }
`;

const SkeletonContainer = styled.div<SkeletonContainerProps>`
  ${({ width, spacing, marginB }) => css`
    width: ${width}px;
    display: flex;
    flex-direction: column;
    margin-bottom: ${marginB}px;
    gap: ${spacing}px;
  `}
`;

const SkeletonContent = styled.div<SkeletonContentProps>`
  ${({ height, border }) => css`
    height: ${height}px;
    width: 100%;
    border-radius: ${border}px;
    opacity: 0.5;
    background: linear-gradient(-90deg, #eee 0%, #c7c7c7 50%, #eee 100%);
    background-size: 400% 400%;
    cursor: progress;
    animation: ${animation} 1.2s ease-in-out infinite;
  `}
`;

export { SkeletonContainer, SkeletonContent };
