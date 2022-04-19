const debounce = (callback, time) => {
  let timer;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(callback, time);
  };
};

export { debounce };
