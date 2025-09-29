var person = {
  name: "Vishnu",
  age: 29,
  education: "B.E",
  languages: ["Tamil", "Kannada", "English"],
};

/**
 * For In
 * Will provie the index of an array and keys of an object
 */
for (var x in person) {
  console.log(x);
}

/**
 * For of
 * Element of an array
 */
// for (var x of person) {
//   console.log(x);
// }

/**
 * To get the list of key names
 */
console.log(Object.keys(person));

/**
 * To get the list of value names
 */
console.log(Object.values(person));

/**
 * To get the entries inside the object
 */
console.log(Object.entries(person));
