import { expect, it, jest } from "@jest/globals";

jest.unstable_mockModule("../src/calculator", () => {
  return {
    default: function () {
      return {
        add(a, b) {
          return a + b;
        },
      };
    },
  };
});

const Main = (await import("../src/main")).default;

it("should multiply the result of adding two numbers", () => {
  const main = new Main();
  const result = main.main();
  expect(result).toBe(10);
});
