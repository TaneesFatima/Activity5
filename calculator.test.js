// calculator.test.js
const calc = require('./calculator');

test('adds two numbers', () => {
  expect(calc.add(2, 3)).toBe(5);
});

test('subtracts two numbers', () => {
  expect(calc.subtract(7, 2)).toBe(5);
});

test('multiplies two numbers', () => {
  expect(calc.multiply(3, 4)).toBe(12);
});

test('divides two numbers', () => {
  expect(calc.divide(8, 2)).toBe(4);
});

test('throws error when dividing by zero', () => {
  expect(() => calc.divide(5, 0)).toThrow('Cannot divide by zero');
});

test('modulus of two numbers', () => {
    expect(calc.modulus(10, 3)).toBe(1);
    expect(calc.modulus(10, 5)).toBe(0);
});

test('modulus by zero throws error', () => {
    expect(() => calc.modulus(10, 0)).toThrow("Cannot divide by zero");
});
