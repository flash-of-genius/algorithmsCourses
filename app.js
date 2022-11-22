// Recursive Fibonacci sequence

function recursiveFibonacci(n) {
  if (n <= 1) return 1;
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(5));
