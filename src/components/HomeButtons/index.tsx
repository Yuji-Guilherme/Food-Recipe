import arrow from '@/assets/arrow.svg';
import github from '@/assets/github-mark.svg';
import { useHandleNavigate } from '@/hooks/useHandleNavigate';

import { AnchorHTMLAttributes } from 'react';

import * as S from './style';

type AnchorProps = {
  type: 'right' | 'left' | 'center';
  link: string;
  text?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

function HomeButton({ type, link, text, ...rest }: AnchorProps) {
  const { handleNavigate } = useHandleNavigate();

  const components = {
    right: (
      <S.BtnR onClick={() => handleNavigate(link)} {...rest}>
        {text}
        <S.ArrowR svg={arrow} />
      </S.BtnR>
    ),
    left: (
      <S.BtnL onClick={() => handleNavigate(link)} {...rest}>
        <S.ArrowL svg={arrow} />
        {text}
      </S.BtnL>
    ),
    center: (
      <S.BtnC href={link} {...rest}>
        <S.GitHubLogo svg={github} />
      </S.BtnC>
    )
  };
  return components[type] ?? null;
}

export { HomeButton };
