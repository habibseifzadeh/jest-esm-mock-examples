import { expect, it, jest } from "@jest/globals";
jest.unstable_mockModule("#root/services/calculator.js", () => {
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
const Calculator = (await import("#root/services/calculator.js")).default;
it("should add two numbers", () => {
    const calculator = new Calculator();
    const result = calculator.add(2, 3);
    expect(result).toBe(5);
});
