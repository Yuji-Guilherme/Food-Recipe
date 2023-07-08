import * as S from './style';

import { SkeletonProps } from './types';

function Skeleton({
  spacing = 20,
  width = 100,
  height = 100,
  border = 0,
  border2 = 0,
  height2 = 0,
  lines = 1,
  marginB = 0,
  smallHeight = 0,
  smWidthPercent = 0
}: SkeletonProps) {
  return (
    <S.SkeletonContainer
      width={width}
      spacing={spacing}
      smWidthPercent={smWidthPercent}
      marginB={marginB}
    >
      {[...Array(lines)].map((_, index) => (
        <S.SkeletonContent
          key={index}
          height={height}
          smallHeight={smallHeight}
          border={border}
        />
      ))}
      {height2 ? (
        <S.SkeletonContent
          height={height2}
          border={border2}
          smallHeight={smallHeight}
        />
      ) : (
        ''
      )}
    </S.SkeletonContainer>
  );
}

export { Skeleton };
