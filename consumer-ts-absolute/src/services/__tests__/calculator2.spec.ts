import { jest, it } from '@jest/globals';
import Calculator from '../calculator.js';

it('should add two numbers', () => {
  const calculator = new Calculator();
  const result = calculator.add(2, 3);
  expect(result).toBe(5);
});