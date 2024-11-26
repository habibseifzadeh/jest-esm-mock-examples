import { expect, it, jest } from "@jest/globals";

jest.unstable_mockModule("../src/calculator.js", () => {
  return {
    default: function () {
      return {
        add(a: number, b: number) {
          return a - b;
        },
      };
    },
  };
});

const Calculator = (await import("../src/calculator.js")).default;

it("should add two numbers", () => {
  const calculator = new Calculator();
  const result = calculator.add(2, 3);
  expect(result).toBe(5);
});
