// Recursive factorial of a number

function recursiveFact(n) {
  if (n < 0) return -1;
  else if (n === 0) return 1;
  else return n * recursiveFact(n - 1);
}

console.log(recursiveFact(5));
