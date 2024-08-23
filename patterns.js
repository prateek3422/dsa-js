// for (let i = 1; i <= 5; i++) {
//   for (let k = 1; k < i; k++) {
//     process.stdout.write("* ");
//   }
//   process.stdout.write("\n");
// }

// // 2 pyramid
// for (let i = 1; i <= 5; i++) {
//   for (let j = 0; j < 5 - i; j++) {
//     process.stdout.write(" ");
//   }
//   for (let k = 1; k < i; k++) {
//     process.stdout.write("* ");
//   }
//   process.stdout.write("\n");
// }

// 3

// for (i = 1; i < 5; i++) {
//   for (let j = 1; j < 5 - i; j++) {
//     process.stdout.write("* ");
//   }
//   process.stdout.write("\n");
// }

//7

// for (let i = 1; i < 5; i++) {
//   for (let j = 1; j < i; j++) {
//     process.stdout.write(" ");
//   }
//   for (let k = 1; k <= 5; k++) {
//     process.stdout.write("* ");
//   }

//   process.stdout.write("\n");
// }

for (let i = 1; i <= 5; i++) {
  for (let j = 0; j <= 5 - i; j++) {
    process.stdout.write(" ");
  }
  for (let k = 1; k < i; k++) {
    process.stdout.write("* ");
  }
  process.stdout.write("\n");
}
