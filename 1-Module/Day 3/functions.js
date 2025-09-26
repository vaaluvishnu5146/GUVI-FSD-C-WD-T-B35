/**
 * Functions are the smallest and re-usable unit of code in software developement
 */

// Function syntax
// function  - keyword
// sum - name of the function
// () - Input
// (a, b) - Function paramater
function sum(a, b) {
  // Reusable Code
  var result = a + b;
  return result;
}

// We can call the function and re-use it any number of time
console.log(sum(22, 10));
var res1 = sum(22, 10); // 32
var res2 = sum(10, 2); // 12
var res3 = sum(2, 4); // 6
var res4 = sum(1, 9); // 10
console.log(res1, res2, res3, res4);

/**
 * Exercise
 * create a greet function that prints "Good Evening"
 * ceate a multipply function that print a * b
 */
