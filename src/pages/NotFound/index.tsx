import { useNavigate } from 'react-router-dom';

import * as S from './style';

function NotFound() {
  const navigate = useNavigate();

  const handlePushHome = () => {
    return navigate('/');
  };

  return (
    <S.Container role="alert">
      <S.TextWrapper>
        <S.Title>404</S.Title>
        <S.SubTitle>{`Sorry, there's nothing here`}</S.SubTitle>
      </S.TextWrapper>
      <S.Button onClick={handlePushHome}>GO HOME</S.Button>
    </S.Container>
  );
}

export { NotFound };
