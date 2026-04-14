function moveZeros(arr) {
  let a = 0;

  for (let b = 0; b < arr.length; b++) {
    if (arr[b] !== 0) {
      [arr[a], arr[b]] = [arr[b], arr[a]];
      a++;
    }
  }

  return arr;
}
moveZeros([0, 1, 0, 3, 12]);
