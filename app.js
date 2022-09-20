// write a function called sumZero which accepts a sorted array of integers. the function should find the first pair where the sum 0.

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));

// function sumZero(arr) {
//   for (let val1 of arr) {
//     let val2 = val1 + 1;
//     for (let val2 of arr) {
//       if (val1 + val2 === 0) {
//         return [val1, val2];
//       }
//     }
//   }
// }
// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
