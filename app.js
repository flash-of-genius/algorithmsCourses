function countDown(num) {
  if (num <= 0) {
    console.log('All Done!!!');
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

// function countDown(num) {
//   for (let i = num; i > 0; i--) {
//     console.log(i);
//   }
//   console.log('All Done!!');
// }
console.log(countDown(5));
