import { Button } from './Button';
import * as S from './style';
import { useInput } from './hooks/useInput';

function Input() {
  const {
    inputRef,
    removeBtnIsOn,
    verifyInput,
    handleInputFocus,
    handleRemove,
    handleSearch
  } = useInput();

  return (
    <S.Container
      onClick={() => handleInputFocus()}
      onBlur={() => verifyInput()}
    >
      <S.Input
        type="text"
        ref={inputRef}
        placeholder="Search recipe"
        onChange={() => verifyInput()}
      />
      {removeBtnIsOn && (
        <Button buttonType="remove" onClick={() => handleRemove()} />
      )}
      <Button
        buttonType="search"
        onClick={() => handleSearch(inputRef.current!.value)}
      />
    </S.Container>
  );
}

export { Input };
