const partialize = (fn, ...args) => fn.bind(null, ...args);

const pipe =
  (...fns) =>
  (initialValue) =>
    fns.reduce((previousValue, fn) => fn(previousValue), initialValue);

export { partialize, pipe };
