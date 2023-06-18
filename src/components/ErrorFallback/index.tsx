import { useNavigate } from 'react-router-dom';

import * as S from './style';

type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary?: () => void;
};

function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  const navigate = useNavigate();

  const handlePushHome = () => {
    return navigate('/');
  };

  return (
    <S.Container role="alert">
      <S.Title>Something went wrong</S.Title>
      <S.Description>{error.message}</S.Description>
      <S.Button onClick={resetErrorBoundary || handlePushHome}>
        Try Again
      </S.Button>
    </S.Container>
  );
}

export { ErrorFallback };
