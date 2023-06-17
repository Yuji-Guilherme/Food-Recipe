import { IMeal } from '@/types';
import { api } from '@/services/api';
import { useReducer, useEffect } from 'react';

type StateProps<T> = {
  data?: T;
  noMeal?: boolean;
  isLoading?: boolean;
};

type ActionProps<T> =
  | { type: 'loading' }
  | { type: 'fetch'; payload: T }
  | { type: 'error' };

const useMealTemplate = (id: string) => {
  const initialState: StateProps<IMeal> = {
    data: undefined,
    noMeal: false,
    isLoading: false
  };

  const reducer = (state: StateProps<IMeal>, action: ActionProps<IMeal>) => {
    switch (action.type) {
      case 'loading':
        return { ...initialState, isLoading: true };
      case 'fetch':
        return { ...initialState, isLoading: false, data: action.payload };
      case 'error':
        return { ...initialState, isLoading: false, noMeal: true };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const controller = new AbortController();
    const fetch = async () => {
      dispatch({ type: 'loading' });
      const response = await api.get(`/lookup.php?i=${id}`, {
        signal: controller.signal
      });
      if (!response.data.meals) return dispatch({ type: 'error' });
      const meal: IMeal = { ...response.data.meals[0] };
      dispatch({ type: 'fetch', payload: meal });
    };

    fetch();

    return () => {
      controller.abort();
    };
  }, [id]);

  return {
    noMeal: state.noMeal,
    mealInfo: state.data,
    isLoading: state.isLoading,
    ...state.data
  };
};

export { useMealTemplate };
