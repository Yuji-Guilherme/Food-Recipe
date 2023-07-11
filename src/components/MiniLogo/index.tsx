import logo from '@/assets/logo-fill.svg';

import * as S from './style';

export type MiniLogoProps = {
  width: number;
  height: number;
};

function MiniLogo({ width = 0, height = 0 }: MiniLogoProps) {
  return <S.MiniLogo svg={logo} width={width} height={height} />;
}

export { MiniLogo };
