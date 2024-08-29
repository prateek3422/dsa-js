function checkPanlindromeNum(num) {
  if (num >= -2147483648 && num <= 2147483648) {
    let x = num.toString().split("");
    let start = 0;
    let end = x.length - 1;

    for (let i = 0; i < x.length; i++) {
      if (start > end) {
        return true;
      }

      if (x[start] == x[end]) {
        start = start + 1;
        end = end - 1;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
}

console.log(checkPanlindromeNum(121));
