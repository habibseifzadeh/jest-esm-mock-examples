import Calculator from "#root/services/calculator.js";
class Main {
    main() {
        const calculator = new Calculator();
        const result = calculator.add(2, 3);
        return result * 2;
    }
}
export default Main;
