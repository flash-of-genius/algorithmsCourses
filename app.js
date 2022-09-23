function naiveSearch(long, short) {
  var count = 0;
  for (let i = 0; i < long.length; i++) {
    console.log(i);
    for (let j = 0; j < short.length; j++) {
      console.log(j);
      if (short[j] !== long[i + j]) {
        console.log(short[j], long[i + j]);
        break;
      }
      if (j === short.length - 1) {
        console.log(j, short.length - 1);
        count++;
      }
    }
  }
  return count;
}

console.log(naiveSearch('amawnhamyaw', 'am'));
