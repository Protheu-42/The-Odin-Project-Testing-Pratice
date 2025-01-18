export function calculator() {
  const add = (number1, number2) => number1 + number2;
  const sub = (number1, number2) => number1 - number2;
  const div = (number1, number2) => number1 / number2;
  const mul = (number1, number2) => number1 * number2;
  return { add, sub, div, mul };
}
