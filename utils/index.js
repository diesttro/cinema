const debounce = (callback, time) => {
  let timer;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(callback, time);
  };
};

const splitDateString = (string) => {
  const [year, month, day] = string?.match(/([0-9]+)/g) ?? [];
  const datePieces = { year, month, day };

  return datePieces;
};

const timeFromMinutes = (value) => {
  const hours = Math.floor(value / 60);
  const minutes = value % 60;

  return [hours, minutes];
};

export { debounce, splitDateString, timeFromMinutes };
