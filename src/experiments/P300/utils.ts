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

export const getStartMarkerFromNumber = (number: number | string): string => {
  return `SHOW-${number}`;
};

export const getStopMarkerFromNumber = (number: number | string): string => {
  return `HIDE-${number}`;
};
