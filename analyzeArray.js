export function analyzeArray(arr) {
  const length = arr.length;
  const average = () => {
    let sumOfAll = arr.reduce(
      (previous, currentValue) => previous + currentValue
    );
    return sumOfAll / length;
  };
  const min = () => Math.min(...arr);
  const max = () => Math.max(...arr);

  return {
    average: average(),
    min: min(),
    max: max(),
    length: length,
  };
}
