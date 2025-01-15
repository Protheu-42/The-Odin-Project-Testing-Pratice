import { capitalize } from "./capitalize";

test("Proper Capitalize Test", () =>{
    const testStrting = "apple";
    const testString2 = "pie"
    expect(capitalize(testStrting)).toBe("Apple");
    expect(capitalize(testString2)).toBe("Pie");
});