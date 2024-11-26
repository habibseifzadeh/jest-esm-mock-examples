import { expect, it, jest } from "@jest/globals";
jest.unstable_mockModule("#root/services/calculator.js", () => {
    return {
        default: function () {
            return {
                add(a, b) {
                    console.log("Mocked add");
                    return 5;
                },
            };
        },
    };
});
const Main = (await import("#root/main.js")).default;
it("should multiply the result of adding two numbers", () => {
    const main = new Main();
    const result = main.main();
    expect(result).toBe(10);
});
