const diceOne = document.getElementById("dice1");
const diceTwo = document.getElementById("dice2");
const rollBtn = document.getElementById("roll");
const resetBtn = document.getElementById("reset");

rollBtn.addEventListener("click", function (e) {
  resetTheDiceGame();
  const dice1 = rollTheDice();
  const dice2 = rollTheDice();
  diceOne.classList.add("dice_animation_1");
  diceTwo.classList.add("dice_animation_2");
  setTimeout(() => {
    diceOne.innerText = dice1;
    diceOne.classList.remove("dice_animation_1");
  }, 1500);
  setTimeout(() => {
    diceTwo.innerText = dice2;
    diceTwo.classList.remove("dice_animation_2");
  }, 1500);
});

resetBtn.addEventListener("click", function (e) {
  resetTheDiceGame();
});

function rollTheDice() {
  return Math.floor(Math.random() * 6 + 1);
}

function resetTheDiceGame() {
  diceOne.innerText = "?";
  diceTwo.innerText = "?";
}
