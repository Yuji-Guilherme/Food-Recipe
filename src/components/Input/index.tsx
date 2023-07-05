import { Button } from './Button';
import { useInput } from './hook';

import * as S from './style';

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
      <S.Title>Make your own food!</S.Title>
      <S.Container
        onClick={() => handleInputFocus()}
        onBlur={() => verifyInput()}
      >
        <S.Input
          type="text"
          ref={inputRef}
          placeholder="find a recipe"
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
