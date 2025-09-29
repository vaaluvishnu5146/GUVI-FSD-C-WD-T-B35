/**
 * HOISTING
 *
 * Mechanism that moves the declaration of a variable
 * to the top portion of the current scope
 */

var a = 10;
var b = 20;

console.log(a, b); // 10, 20

function calc() {
  var a = 100;
  b = 30; // Re-initialise
  console.log(a, b); // 100, 30
}

calc();

console.log(a, b); // 10, 20 or 10, 30

function greet() {
  var message = "Good Evening";
  console.log(message); // Good Evening
}

greet();

console.log(message); // Referrence Error: messsage is not defined

var isDefined = true;
var i;
if (isDefined == false) {
  var i = 10;
  isDefined = true;
}

console.log(isDefined); // true
console.log(i); // 10 or error or undefned

for (var x = 0; x < 1; x++) {
  var y = 100;
  console.log(x); // 0
}
console.log(x); // 1 or 0 or Error
console.log(y);

for (var x = 0; x < 5; x++) {
  for (var y = 0; y < 5; y++) {
    x = 10;
    console.log(x);
    console.log(y);
  }
}
