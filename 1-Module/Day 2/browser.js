// alert
// prompt
// confirm

// Build a simple ATM

// Enter userName
// Enter Amount
// Enter Pin
// Money Disburssed
var userName;
var amount;
var pinEntered;
var pinStored = 1234;
userName = prompt("Enter userName");

if (userName == null || userName == undefined || userName == "") {
  alert("Due to security reason, we are ending this transaction");
  return;
}

amount = prompt("Enter amount");

if (amount == null || amount == undefined) {
  alert("Due to security reason, we are ending this transaction");
  return;
} else if (amount < 100 || amount > 1000) {
  alert(
    "Entered amount doesnt fall between Minimum or maximum discursal amount"
  );
  return;
}

pinEntered = prompt("Enter Pin");
if (pinEntered == null || pinEntered == undefined) {
  alert("Due to security reason, we are ending this transaction");
  return;
} else if (pinEntered != pinStored) {
  alert("Pin Entered is wrong");
  return;
}

alert("Money disburssed");
