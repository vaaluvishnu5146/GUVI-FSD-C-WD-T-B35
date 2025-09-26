/////////////////////////////////////////
// LOGICAL OOPERATOR
// 1. AND
// 2. OR
// 3. NOT
// OUTPUT OF LOGICAL OPERATOR = Boolean
/////////////////////////////////////////

// AND
// If both input is true, then output is true
// If anyone of the input is false, then ouput is false
//   A    B     Output
// true  true - true
// true  false - false
// false false - false
// false true - false

// == - Will check both value equality
// ex - 10 == '10', 10 == 100

// === will check for value and data type equality
// 10 === '10'
// 1. 10 and '10' as a value it is equal? true
// 2. 10 and '10' as a datatype is it equal? false
// ans = false
console.log(10 === "10");

// 100 === 100
// 1. 100 and 100 as a value it is equal? true
// 2. 100 and 100 as a datatype is it equal? true
// ans = true
console.log(100 === 100);

// OR
// If any one input is true, then output is true

//   A    B       Output
// true  true  -   true
// true  false -   true
// false false -   false
// false true  -   true

// >=, <=
// Example 1
console.log(10 >= 20); // false
// 1. 10 greater than 20 - false
// 2. 10 equal to 20 - false

// Example 2
console.log(10 <= 11); // true
// 1. 10 lesser than 11 - true
// 2. 10 equal to 11 - false

// NOT OPERATOR
//   A    B
// true  false
// false true
// Comparision (!=)
console.log(10 != 10); // false

var isDeleted = false;
console.log(isDeleted);
console.log(!isDeleted);
