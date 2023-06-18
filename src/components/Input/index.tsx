import { Button } from './Button';
import { useInput } from './hook';
import { useMealStore } from '@/store/meals';

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

  const {
    state: { meals }
  } = useMealStore();

  return (
    <S.Section up={meals.length > 0 ? true : upInput}>
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
