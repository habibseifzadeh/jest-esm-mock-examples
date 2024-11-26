import { expect, it, jest } from "@jest/globals";

jest.unstable_mockModule("../src/calculator", () => {
  return {
    default: function () {
      return {
        add(a, b) {
          return a - b;
        },
      };
    },
  };
});

const Calculator = (await import("../src/calculator")).default;

it("should add two numbers", () => {
  const calculator = new Calculator();
  const result = calculator.add(2, 3);
  expect(result).toBe(5);
});
