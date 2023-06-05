import { useRef, useState } from 'react';
import { api } from '@/services/api';
import { useMealStore } from '@/store/meals';

const useInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [removeBtnIsOn, setRemoveBtnIsOn] = useState(false);
  const [upInput, setUpInput] = useState(false);
  const {
    actions: { setLoading, fail, success }
  } = useMealStore();

  const inputFocus = () => {
    inputRef?.current?.focus();
  };

  const inputClear = () => {
    inputRef.current!.value = '';
  };

  const verifyInput = () => {
    if (inputRef.current!.value.trim() === '') return setRemoveBtnIsOn(false);
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
    if (mealSearch.trim() === '') return;
    setUpInput(true);
    fetchSearch(mealSearch);
  };

  const fetchSearch = async (mealSearch: string) => {
    setLoading();
    const response = await api.get(`/search.php?s=${mealSearch}`);
    const mealsData = response.data.meals;
    if (!mealsData) return fail();
    return success(mealsData);
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
