// linear search

function search(arr, val) {
  if (arr.includes(val)) {
    return arr.indexOf(val);
  } else {
    return -1;
  }
}
console.log(search([5, 2, 6, 2, 2, 7], 6));
