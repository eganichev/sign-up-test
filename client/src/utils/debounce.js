const DEFAULT_USER_INTERACTION_DEBOUNCE = 500;

export const debounce = (func, timeout = DEFAULT_USER_INTERACTION_DEBOUNCE) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};