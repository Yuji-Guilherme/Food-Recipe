import { takeUntil } from '@/functions/utils';
import { useSearchStore } from '@/store/search';

import { useEffect, useRef, useState } from 'react';

const useInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [removeBtnIsOn, setRemoveBtnIsOn] = useState(false);
  const [upInput, setUpInput] = useState(false);
  const {
    actions: { clearSearch, setSearchMeal }
  } = useSearchStore();

  useEffect(() => clearSearch(), [clearSearch]);

  const inputFocus = () => {
    inputRef?.current?.focus();
  };

  const inputBlur = () => {
    inputRef?.current?.blur();
  };

  const inputClear = () => {
    inputRef.current!.value = '';
  };

  const verifyInput = () => {
    const currentValue = inputRef.current!.value;
    if (!currentValue) return setRemoveBtnIsOn(false);
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

  const handleSearch = () => {
    const searchMeal = inputRef.current!.value;
    if (!searchMeal) return;

    takeUntil(1, setUpInput(true));
    setSearchMeal(searchMeal);
    inputBlur();
  };

  return {
    inputRef,
    upInput,
    removeBtnIsOn,
    verifyInput,
    handleInputFocus,
    handleRemove,
    handleSearch
  };
};

export { useInput };
