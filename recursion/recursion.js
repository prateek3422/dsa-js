function sum(n) {
  if (n === 0) {
    return;
  }
  sum(n - 1);
  console.log(n);
  sum(n - 1);
}
// console.log(sum(3)); // 10

// ============= Print1-To-N-Without-Loop ==============

function print(n) {
  if (n === 0) {
    return;
  }
  print(n - 1);
  console.log(n);
}

// console.log(print(5));

// ============ Sum of first n terms =========

function sum1(n) {
  if (n === 0) {
    return 0;
  }

  return n + sum1(n - 1);
}

// console.log(sum1(5));

// ============== pallendrome ================
var isPalindrome = function (s, i = 0, j = s.length - 1) {
  if (i > j) {
    return true;
  }

  if (s[i] !== s[j]) {
    return false;
  } else {
    isPalindrome(s, i + 1, j - 1);
  }
};

let str = "A man, a plan, a canal: Panama";

const s = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
const end = str.length - 1;
// console.log(isPalindrome(s));
// =========== Reverse a given Array =========

// function arr(n) {
//   if (n === 0) {
//     return;
//   }

//   console.log(n.reverse());
// }

// console.log(arr([1, 2, 3, 4, 5]));

//get sum of  numbers

function getsum(n) {
  if (n === 0) {
    return 0;
  } else {
    return getsum(Math.floor(n / 10)) + (n % 10);
  }
}

// console.log(getsum(55));
