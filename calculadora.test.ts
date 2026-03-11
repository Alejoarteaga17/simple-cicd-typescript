/**
 * Unit tests for calculator functions
 * Loads the compiled calculadora.js so window functions are available (same as in the browser).
 */
declare global {
  interface Window {
    sum: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
    multiply: (a: number, b: number) => number;
    divide: (a: number, b: number) => number;
  }
}

beforeAll(() => {
// Cargar el script compilado que adjunta las funciones a window (no módulo)
// eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./calculadora.js");
});

// test para suma
describe("sum", () => {
  it("adds two positive numbers", () => {
    expect(window.sum(2, 3)).toBe(5);
  });

  it("adds negative numbers and positive numbers", () => {
    expect(window.sum(-1, 1)).toBe(0);
  });

  it("returns 0 when both are 0", () => {
    expect(window.sum(0, 0)).toBe(0);
  });
});

// test para resta
describe("subtract", () => {
  it("subtracts two positive numbers", () => {
    expect(window.subtract(5, 3)).toBe(2);
  });

  it("subtracts with negative numbers", () => {
    expect(window.subtract(-1, 1)).toBe(-2);
  });

  it("returns 0 when subtracting equal numbers", () => {
    expect(window.subtract(5, 5)).toBe(0);
  });
});

// test para multiplicacion
describe("multiply", () => {
  it("multiplies two positive numbers", () => {
    expect(window.multiply(3, 4)).toBe(12);
  });

  it("multiplies with negative numbers", () => {
    expect(window.multiply(-2, 3)).toBe(-6);
  });

  it("returns 0 when multiplying by 0", () => {
    expect(window.multiply(5, 0)).toBe(0);
  });
});

// test para division incluyendo el caso de division por cero
describe("divide", () => {
  it("divides two positive numbers", () => {
    expect(window.divide(6, 2)).toBe(3);
  });

  it("divides with negative numbers", () => {
    expect(window.divide(-6, 2)).toBe(-3);
  });

  it("throws error when dividing by zero", () => {
    expect(() => window.divide(5, 0)).toThrow('No puedes dividir entre cero');
  });
});

export {};
