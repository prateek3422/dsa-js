let n = 5;
let j = 0;

for (let i = n; i >= 1; i--) {
  j += i;
}
console.log(j);

// or

function sum(n) {
  return (n * (n + 1)) / 2;
}

console.log(sum(3));
