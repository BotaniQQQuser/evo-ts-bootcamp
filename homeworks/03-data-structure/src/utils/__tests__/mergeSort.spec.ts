import { mergeSort, CompareFunctionResult } from '../mergeSort';


const compareNumbersFunc = (a: number, b: number): CompareFunctionResult => {
  if (a === b) return 0;
  return a < b ? -1 : 1;
};

const compareStringsByLengthDesc = (a: string, b: string): CompareFunctionResult => {
  if (a.length === b.length) return 0;
  return a < b ? 1 : -1;
};

describe('MergeSort', () => {
  it('should sort array of number ascending', () => {
    expect(mergeSort([5, 4, 3, 2, 1], compareNumbersFunc)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should sort array of string by length descending (mergeSort is generic)', () => {
    expect(mergeSort(['test', 'test2', 't', 'test200'], compareStringsByLengthDesc)).toEqual(['test200', 'test2', 'test', 't']);
  });
});
