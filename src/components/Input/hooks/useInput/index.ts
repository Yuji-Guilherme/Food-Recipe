import { useRef, useState } from 'react';
import { useMeals } from '@/store/meals';

const useInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [removeBtnIsOn, setRemoveBtnIsOn] = useState(false);
  const { execute } = useMeals();

  const inputFocus = () => {
    inputRef?.current?.focus();
  };

  const inputClear = () => {
    inputRef.current!.value = '';
  };

  const verifyInput = () => {
    if (inputRef.current?.value.trim() === '') return setRemoveBtnIsOn(false);
    setRemoveBtnIsOn(true);
  };
  const handleInputFocus = () => {
    inputFocus();
    verifyInput();
  };
  const handleRemove = () => {
    inputClear();
    inputFocus();
  };

  const handleSearch = (text: string) => {
    if (inputRef.current?.value.trim() === '') return;
    execute(text);
  };

  return {
    inputRef,
    removeBtnIsOn,
    verifyInput,
    handleInputFocus,
    handleRemove,
    handleSearch
  };
};

export { useInput };
