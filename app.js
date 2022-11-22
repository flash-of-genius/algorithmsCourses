// // Power of Two
function isPowerOfTwo(n) {
  if (n === 1) return true;
  if (n % 2 !== 0) return false;
  return isPowerOfTwo(n / 2);
}
console.log(isPowerOfTwo(3));

function isPowerOfTwo1(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

console.log(isPowerOfTwo1(3));

function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwoBitWise(8));
