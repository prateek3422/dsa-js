function count(n) {
  let totalCount = 0;
  let m = n.toString();

  for (let i = 1; i <= m.length; i++) {
    totalCount++;
    n = Math.floor(n / 10);
  }
  console.log(totalCount);
}
console.log(count(7789));
