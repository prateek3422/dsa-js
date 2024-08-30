function bubble(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = i; j <= arr.length - 1; j++) {
      let x = j;
      let z = j + 1;
      if (arr[x] > arr[z]) {
        let temp = x;
        x = z;
        z = temp;
      }
    }
  }
  console.log(arr);
}

console.log(bubble([9, 13, 20, 24, 46, 52]));
