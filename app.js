// Prime Number

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(7));

function isPrime1(n) {
  if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) {
    return false;
  }
  let m = Math.sqrt(n);

  for (let i = 2; i <= m; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrime1(7)); //Output: True
console.log(isPrime1(6)); //Output: False
