export type StateProps<T> = {
  data?: T;
  noMeal?: boolean;
  isLoading?: boolean;
};

export type ActionProps<T> =
  | { type: 'loading' }
  | { type: 'fetch'; payload: T }
  | { type: 'error' };
