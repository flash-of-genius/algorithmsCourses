// Linear search
function linearSearch(n, t) {
  let arr = [5, 9, 4, 56, 89, 23, 14, 10];
  for (let i = 0; i <= n; i++) {
    if (arr[i] === t) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch(8, 400));
