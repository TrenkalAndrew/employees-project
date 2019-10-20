export const getNormalizedDate = (ms) => {
  const date = new Date(Number(ms));

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `${getNormalizePartOfDate(day)}.${getNormalizePartOfDate(month)}.${year} ${getNormalizePartOfDate(hours)}:${getNormalizePartOfDate(minutes)}:${getNormalizePartOfDate(seconds)}`
};

const getNormalizePartOfDate = (digit) => {
  return digit < 10 ? '0' + digit : digit
};