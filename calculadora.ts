/**
 * Returns the sum of two numbers.
 */
function sum(a: number, b: number): number {
  return a + b;
}

/**
 * Returns the difference of two numbers (a - b).
 */
function subtract(a: number, b: number): number {
  return a - b;
}

/**
 * Returns the product of two numbers.
 */
function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * Returns the division of two numbers (a / b).
 * Throws an error if dividing by zero.
 */
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

// Le pedi a copilot una forma mas limpia de exponer las funciones al window 
// y no hacer una para cada uno, y me hizo esta interface, me parecio buena idea asi que la deje
interface WindowCalc {
  sum: typeof sum;
  subtract: typeof subtract;
  multiply: typeof multiply;
  divide: typeof divide;
}

const calc = window as unknown as WindowCalc;
calc.sum = sum;
calc.subtract = subtract;
calc.multiply = multiply;
calc.divide = divide;