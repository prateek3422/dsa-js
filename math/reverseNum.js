// function reverseNum(n) {
//   let num = n.toString();
//   let reverse = 0;

//   // for (let i = 1; i <= num.length; i++) {
//   //   let m = n % 10;
//   //   reverse = reverse * 10 + m;

//   //   n = Math.floor(n / 10);
//   // }
//   // console.log(reverse);
//   let m = Math.abs(n);

//   while (m > 0) {
//     let d = m % 10;
//     reverse = reverse * 10 + d;
//     m = Math.floor(m / 10);
//   }
//   console.log(Math.sign(n) * reverse);
// }

// console.log(reverseNum(-12));
var reverse = function (x) {
  let reverseNum = 0;
  let n = Math.abs(x);

  while (n > 0) {
    let num = n % 10;
    reverseNum = reverseNum * 10 + num;
    n = Math.floor(n / 10);
  }

  let Rev = Math.sign(x) * reverseNum;
  return Rev;
};

console.log(reverse(1534236469));
