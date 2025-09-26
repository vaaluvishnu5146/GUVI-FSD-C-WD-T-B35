/**
 * Conditional statement helps us to make decision
 * inside code based on given condition
 *
 * 2 Types of conditional statement
 * 1. if else
 * 2. Switch
 */

/**
 * if else
 * if, else if, else
 */
var name = "gokul";

if (name == "gokul") {
  console.log("Hello gokul");
} else if (name == "arun") {
  console.log("Hello arun");
} else if (name == "murugan") {
  console.log("Hello murugan");
} else {
  console.log("Hello Vishnu");
}

/**
 * SWITCH STATEMENTS
 */
var order = "idli";

switch (order) {
  case "idli":
    console.log("Idli order placed");
  case "sambhar":
    console.log("sambhar order placed");
    break;
  case "dosa":
    console.log("Dosa order placed");
    break;
  default:
    console.log("Order a specific food item");
    break;
}
