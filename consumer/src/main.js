import Calculator from "./calculator";

class Main {
  main() {
    const calculator = new Calculator();
    const result = calculator.add(2, 3);

    return result * 2;
  }
}
export default Main;
