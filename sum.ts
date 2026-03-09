/**
 * Returns the sum of two numbers.
 */
function sum(a: number, b: number): number {
  return a + b;
}

// Expose to window so the HTML script can call it
(window as unknown as { sum: typeof sum }).sum = sum;
