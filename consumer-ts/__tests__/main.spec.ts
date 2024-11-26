import { expect, it, jest } from "@jest/globals";

jest.unstable_mockModule("../src/calculator.js", () => {
  return {
    default: function () {
      return {
        add(a: number, b: number) {
          return a + b;
        },
      };
    },
  };
});

const Main = (await import("../src/main.js")).default;

it("should multiply the result of adding two numbers", () => {
  const main = new Main();
  const result = main.main();
  expect(result).toBe(10);
});
