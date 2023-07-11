import { HomeLogo } from '@/components/HomeLogo';
import { HomeButton } from '@/components/HomeButtons';

import * as S from './style';

function HomeTemplate() {
  return (
    <>
      <S.Container>
        <HomeLogo />
        <S.Title>Free Recipe</S.Title>
      </S.Container>
      <S.BtnContainer>
        <HomeButton type="left" text="Search" link="/search" />
        <HomeButton
          type="center"
          link="https://github.com/Yuji-Guilherme/Free-Recipe"
        />
        <HomeButton type="right" text="Categories" link="/categories" />
      </S.BtnContainer>
    </>
  );
}

export { HomeTemplate };
