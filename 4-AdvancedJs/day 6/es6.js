// // Variable declared and value initialized
// var a;
// let b;

// console.log(a, b);

// // Value re-initialised
// a = 20;
// b = 30;

// console.log(a, b);

// // 'const' declarations must be initialized.ts(1155)
// // const c;
// const c = 10;
// console.log(c);

// // c = 20;
// // console.log(c);

// function a() {
//   // let or const
// }

// // Hositing (var)
// console.log(fname); // undefined
// var fname = "hoisting";
// console.log(fname); // hoisting

// console.log(lname); // undefined
// const lname = "hoisting";
// console.log(lname); // hoisting

// ARROW FUNCTION
function a(x, y) {
  console.log(this, x, y);
}

// call, apply, bind

var arrowFn = () => {
  console.log(this);
};

a();
// arrowFn();

a.call({ name: "Vishnu" }, 10, 20);
a.apply({ name: "Vishnu Vardhan" }, [1, 2]);
var newAFn = a.bind({ title: "PUBG" }, 100, 200);
newAFn();

a();

function addTwoNum(a, b) {
  return a + b;
}

const add = (a, b) => a + b;

// Default parameter
function sumTwo(a = 0, b = 0) {
  //   if (!a || !b) return 0;
  return a + b;
}
console.log(sumTwo(2, 2)); // 4
console.log(sumTwo()); //

// Template literals
let user = "Vishnu";
let message = `Good Night, sweet dreams! by ${user} ${new Date().getDate()}`;
console.log(message);

// Spread operator
// Operator that helps to unwrap or copy the elements of the array or key-value pairs of the object.

// Copy Array into another array
const digi = [1, 2, 3, 4, 5];
const digiCopy = [...digi];

console.log(digi, digiCopy);

// Copy Object into another object
const userData = {
  userName: "vishnu",
  course: "Java Fullstack",
  experince: 8,
};

// const customerData = {
//   userName: userData.userName,
//   course: userData.course,
//   experince: userData.experince,
// };

const customerData = {
  ...userData,
};

userData["course"] = "Javascript Fullstack";

// REST Operator
function sum(a, b, ...c) {
  let sum = a + b;

  c.forEach((e) => (sum += e));

  return sum;
}

console.log("Total sum", sum(...digi));

// Destructuring
// Array Destructuring
const [input1, input2] = ["Masala Dosa", "Ven pongal"];
console.log(input1, input2);

// Object Destructuring
const { userName, course, experince } = {
  userName: "vishnu",
  course: "Java Fullstack",
  experince: 8,
  city: "Coimbatore",
};
console.log(userName, course, experince);
