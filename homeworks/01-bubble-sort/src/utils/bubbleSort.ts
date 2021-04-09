interface SortResult {
  values: number[];
  fullySorted: boolean;
}

export const bubbleSort = (arr: number[]): SortResult => {
  if (!arr.length) {
    return {
      values: arr,
      fullySorted: true,
    };
  }
  let values = arr.slice();

  for (let j = 1; j <= values.length - 1; j++) {
    for (let i = 0; i <= values.length - j - 1; i++) {
      if (values[i] > values[i + 1]) {
        const temp = values[i];
        values[i] = values[i + 1];
        values[i + 1] = temp;
        return {
          values,
          fullySorted: false,
        };
      }
    }
  }

  return {
    values,
    fullySorted: true,
  };
};
