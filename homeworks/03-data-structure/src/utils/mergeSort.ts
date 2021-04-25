export type CompareFunctionResult = -1 | 0 | 1;

export const mergeSort = <T>(array: T[], compareFunction: (a: T, b: T) => CompareFunctionResult): T[] => {
  if (array.length <= 1) return array;

  const arrayLength = array.length;
  const middle = arrayLength % 2 === 0
    ? arrayLength / 2
    : Math.ceil(arrayLength / 2);
  const leftPart = array.slice(0, middle);
  const rightPart = array.slice(middle);

  const sortedLeftPart = mergeSort(leftPart, compareFunction);
  const sortedRightPart = mergeSort(rightPart, compareFunction);

  const result: T[] = new Array<T>(arrayLength);

  let leftPartIndex = 0;
  let rightPartIndex = 0;
  let resultArrayIndex = 0;

  while (leftPartIndex < sortedLeftPart.length && rightPartIndex < sortedRightPart.length) {
    if (compareFunction(sortedLeftPart[leftPartIndex], sortedRightPart[rightPartIndex]) <= 0) {
      result[resultArrayIndex] = sortedLeftPart[leftPartIndex];
      leftPartIndex += 1;
    } else {
      result[resultArrayIndex] = sortedRightPart[rightPartIndex];
      rightPartIndex += 1;
    }
    resultArrayIndex += 1;
  }
  while (leftPartIndex < sortedLeftPart.length) {
    result[resultArrayIndex] = sortedLeftPart[leftPartIndex];
    leftPartIndex += 1;
    resultArrayIndex += 1;
  }

  while (rightPartIndex < sortedRightPart.length) {
    result[resultArrayIndex] = sortedRightPart[rightPartIndex];
    rightPartIndex += 1;
    resultArrayIndex += 1;
  }

  return result;
};
