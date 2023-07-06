import { IMeal } from '@/types';
import { StateProps, ActionProps } from './types';
import { api } from '@/services/api';
import { isTypeError } from '@/functions';

import { useReducer, useEffect } from 'react';
import { useErrorBoundary } from 'react-error-boundary';

const useMealTemplate = (id: string) => {
  const initialState: StateProps<IMeal> = {
    data: undefined,
    noMeal: false,
    isLoading: true
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
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    const controller = new AbortController();

    const fetch = async () => {
      dispatch({ type: 'loading' });

      try {
        const response = await api.get(`/lookup.php?i=${id}`, {
          signal: controller.signal
        });
        if (!response.data.meals) return dispatch({ type: 'error' });
        const meal: IMeal = { ...response.data.meals[0] };
        dispatch({ type: 'fetch', payload: meal });
      } catch (error) {
        if (isTypeError(error)) return;
        showBoundary(error);
      }
    };

    fetch();

    return () => {
      controller.abort();
    };
  }, [id, showBoundary]);

  return {
    noMeal: state.noMeal,
    mealInfo: state.data,
    isLoading: state.isLoading,
    ...state.data
  };
};

export { useMealTemplate };
