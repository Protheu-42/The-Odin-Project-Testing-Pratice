import { capitalize } from "./capitalize";
import { revertString } from "./revertString";
import { calculator } from "./calculator";
import { cesarCipher } from "./cesarCipher";
import { analyzeArray } from "./analyzeArray";

test("Proper Capitalize Test", () => {
  const testStrting = "apple";
  const testString2 = "pie";
  expect(capitalize(testStrting)).toBe("Apple");
  expect(capitalize(testString2)).toBe("Pie");
});

test("Reverse String Checker", () => {
  let string = "Apple";
  let reversedString = "elppA";
  expect(revertString(string)).toBe(reversedString);
});

test("Calculator Test", () => {
  expect(calculator().add(2, 2)).toBe(4);
  expect(calculator().sub(3, 3)).toBe(0);
  expect(calculator().div(6, 2)).toBe(3);
  expect(calculator().mul(3, 4)).toBe(12);
});

test("Cesar Cipher Test", () => {
  expect(cesarCipher("xyz", 3)).toBe("abc");
  expect(cesarCipher("xyz", 5)).toBe("cde");
  expect(cesarCipher("xyz", 7)).toBe("efg");
  expect(cesarCipher("Hello!", 5)).toBe("Mjqqt!");
  expect(cesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyzeArray", () => {
  let array = [1, 8, 3, 4, 2, 6];
  expect(analyzeArray(array).average).toBe(4);
  expect(analyzeArray(array).min).toBe(1);
  expect(analyzeArray(array).max).toBe(8);
  expect(analyzeArray(array).length).toBe(6);
});
