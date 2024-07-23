export const getNumbersByOddParadigm = (max: number): number[] => {
  // Create an ordered array of numbers up to the max value
  const array = Array.from({ length: max }, (_, i) => i + 1);

  // Shuffle the array using the Fisher-Yates shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }

  return array;
};

const SHOW_MARKER = 10;
const HIDE_MARKER = 20;

export const getStartMarkerFromNumber = (number: number): number => {
  return SHOW_MARKER + number;
};

export const getStopMarkerFromNumber = (number: number): number => {
  return HIDE_MARKER + number;
};
