import { ButtonHTMLAttributes } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';

import * as S from './style';

type ButtonProps = {
  buttonType: 'search' | 'remove';
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ buttonType, ...rest }: ButtonProps) {
  const components = {
    search: (
      <S.SrcButton {...rest}>
        <AiOutlineSearch />
      </S.SrcButton>
    ),
    remove: (
      <S.RmvButton {...rest}>
        <IoMdClose />
      </S.RmvButton>
    )
  };
  return components[buttonType] ?? null;
}

export { Button };
