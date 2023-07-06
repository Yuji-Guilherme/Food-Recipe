const isTypeError = (error: Error | unknown) =>
  error instanceof Error && error.name === 'TypeError';

export { isTypeError };
