var data = [1, 2, 3, 4, 5, 6];

/**
 * For In
 * Will provie the index of an array and keys of an object
 */
for (var x in data) {
  console.log(x);
}

/**
 * For of
 * Element of an array
 */
for (var x of data) {
  console.log(x);
}

/**
 * Reverse the array
 */
// Reverese method
data.reverse();
console.log(data);

// Using for loop
for (var i = data.length - 1; i >= 0; i--) {
  console.log(data[i]);
}

/**
 * 1. To check whether element is inside the given array
 * 2. Get the index of the element inside the array
 */
console.log(data.indexOf(6)); // 5
console.log(data.indexOf(8)); // -1 or 0 or Error or Array index out of bounds

// Filter evens using Filter method
var evens = data.filter(function (a) {
  return a % 2 == 0;
});
console.log(evens);

// Filter all the even elements from the array
var evens = [];
data.forEach(function (a) {
  if (a % 2 == 0) {
    evens.push(a);
  }
});
console.log(evens);

// Check for whether given element is available inside the array
console.log(data.includes(5)); // true
console.log(data.includes(100)); // false

// Foreach
data.forEach(function (a) {
  console.log(a);
});

// Find length of the array
console.log(data.length);

// Print the elements in the given aray uisng FOR loop
for (var i = 0; i < data.length; i++) {
  console.log(data[i]);
}
