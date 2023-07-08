const partialize = (fn, ...args) => fn.bind(null, ...args);

const pipe =
  (...fns) =>
  (initialValue) =>
    fns.reduce((previousValue, fn) => fn(previousValue), initialValue);

const takeUntil = (times, fn) => () => times-- && fn();

export { partialize, pipe, takeUntil };
