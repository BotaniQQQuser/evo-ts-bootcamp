export const generateArrayWithRandomNumbers = (
  length: number,
  maxValue: number,
) => Array.from({ length }, () => Math.floor(Math.random() * maxValue));
