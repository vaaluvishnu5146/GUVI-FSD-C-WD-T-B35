// "use strict";
// var public = 0;
// var implements = 1;
// var let = 2;
// var package = 3;
// var static = 4;
// var yield = 5;
// var private = 6;
// var protected = 7;

var data = [-1, 0, 1, 2, 3, 4, 5];

// New Methods in Array
var multipliedArray = data.map((element) => {
  return element * 2;
});
var evenNums = data.filter((element) => element % 2 == 0);
var oddNums = data.filter((element) => element % 2 != 0);
var sumOfElements = data.reduce((p, c) => p + c);
var checkEveryElementIsGreaterThanZero = data.every((element) => element > 0);
var fourExists = data.includes(4);
var sixExists = data.includes(6);
var sevenExists = data.includes(7);
var does4Exists = data.find((element) => element === 4);
var does6Exists = data.find((element) => element === 6);

var todoData = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 3,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 2,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 2,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
];

var matchingTodoForUser3 = todoData.find((element) => element.userId == 2);

var indexOfATodo = todoData.findIndex((element) => element.title == "et porro");

var data = [1, 2, [3, 4, [5, 6, 7]]];
console.log(data.flat(2));
// Recurrsion

var flatten = [];

function flattenArray(data = []) {
  data.forEach((element) => {
    if (Array.isArray(element)) {
      flattenArray(element);
    } else {
      flatten.push(element);
    }
  });
}

flattenArray(data);

// JSON METHODS
var data = '{ "name":"vishnu", "city": "pollachi" }';
console.log(JSON.parse(data));

var user = {
  name: "vishnu",
  city: "pollachi",
};
console.log(JSON.stringify(user));

// OBJECT METHODS
var game = {
  name: "PUBG",
  lobbyCount: "4",
  maps: ["Erangel", "Shankok", "Miramar"],
};

console.log("Print al the keys of obj", Object.keys(game));
console.log("Print al the values of obj", Object.values(game));
console.log("Print al the entries of obj", Object.entries(game));
