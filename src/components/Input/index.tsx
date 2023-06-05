import { Button } from './Button';
import * as S from './style';
import { useInput } from './hooks/useInput';

function Input() {
  const {
    inputRef,
    upInput,
    removeBtnIsOn,
    verifyInput,
    handleInputFocus,
    handleRemove,
    handleSearch
  } = useInput();

  return (
    <S.Section up={upInput}>
      <S.Title>Get cooking today!</S.Title>
      <S.Container
        onClick={() => handleInputFocus()}
        onBlur={() => verifyInput()}
      >
        <S.Input
          type="text"
          ref={inputRef}
          placeholder="Search recipe"
          onChange={() => verifyInput()}
          onKeyPress={(e) => {
            if (e.key === 'Enter') handleSearch();
          }}
        />
        {removeBtnIsOn && (
          <Button buttonType="remove" onClick={() => handleRemove()} />
        )}
        <Button buttonType="search" onClick={() => handleSearch()} />
      </S.Container>
    </S.Section>
  );
}

export { Input };