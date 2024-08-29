function ArmstrongNum(n) {
  let x = n;
  let result = 0;

  while (x > 0) {
    let d = Math.pow(x % 10, 3);
    result = result + d;

    x = Math.floor(x / 10);
  }

  if (result === n) {
    return true;
  } else {
    return false;
  }
}

console.log(ArmstrongNum(153));
