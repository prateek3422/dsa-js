function binary(arr, size, n) {
  let start = 0;
  let end = size - 1;
  let mid = Math.floor((start + end) / 2);

  while (start <= end) {
    if (arr[mid] == n) {
      return mid;
    } else if (n > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  return -1;
}

let arr = [2, 4, 7, 8, 9, 10];

// console.log(binary(arr, arr.length, 9));
