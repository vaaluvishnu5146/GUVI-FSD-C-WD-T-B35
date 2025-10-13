/**
 * Loops
 * Will execute a piece of code or functions for N times
 *
 * Types of loops
 * For loop
 * while loop
 * do while loop
 * forEach
 * map
 * filter
 */

// For loop
for (var i = 1; i <= 10; i = i + 1) {
  console.log(i);
}

for (var i = 10; i >= 1; i = i - 1) {
  console.log(i);
}

// While
var start = 1;
var end = 10;

while (start <= end) {
  console.log(start);
  if (start == 4) {
    start += 3;
  } else {
    start += 1;
  }
}

// do while
var b = 0;
do {
  console.log(b);
} while (b > 1);

// if else inside a loop
// Print all the even numbers
for (var i = 1; i <= 10; i++) {
  isEvenNumber(i);
}

function isEvenNumber(n) {
  if (n % 2 == 0) {
    console.log("Even number === ", i);
  }
}
