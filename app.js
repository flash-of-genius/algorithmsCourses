// Factorial of a number
// with recursion
function factorialize1(n) {
  if (n < 0) return -1;
  else if (n == 0) return 1;
  else return n * factorialize1(n - 1);
}
console.log(factorialize1(5));

// with a while loop
function factorialize2(n) {
  let result = n;
  if (n === 0 || n === 1) return 1;
  while (n > 1) {
    n--;
    result *= n;
  }
  return result;
}
console.log(factorialize2(10));

//with a for loop
function factorialize3(n) {
  if (n === 0 || n === 1) return 1;

  for (let i = n - 1; i > 1; i--) {
    n *= i;
  }
  return n;
}

console.log(factorialize3(15));

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}
console.log(factorial(20));
