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
