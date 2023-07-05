import { api } from '@/services/api';
import { useMealStore } from '@/store/meals';

import { useEffect, useRef, useState } from 'react';

const useInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [removeBtnIsOn, setRemoveBtnIsOn] = useState(false);
  const [upInput, setUpInput] = useState(false);
  const {
    actions: { initialState, setLoading, fail, success }
  } = useMealStore();

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
    const mealSearch = inputRef.current!.value;
    if (!mealSearch) return;

    if (!upInput) setUpInput(true); //takedown next pipe
    fetchSearch(mealSearch);
    inputBlur();
  };

  const fetchSearch = async (mealSearch: string) => {
    setLoading();

    const response = await api.get(`/search.php?s=${mealSearch}`);
    const mealsData = response.data.meals;

    if (!mealsData) return fail();
    return success(mealsData);
  };

  useEffect(() => initialState(), [initialState]);

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
