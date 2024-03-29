"use strict";

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const changeBackgroundColor = function (backgroundColor) {
  document.querySelector("body").style.backgroundColor = backgroundColor;
};

const changeScore = function (score) {
  document.querySelector(".score").textContent = score;
};

const generateSecretNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

const styleNumber = function (style) {
  document.querySelector(".number").style.width = style;
};

const updateSecretNumberBox = function (textContent) {
  document.querySelector(".number").textContent = textContent;
};

let secretNumber = generateSecretNumber();
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //when there is no input
  if (!guess) {
    displayMessage("No number!⛔");
  }

  //the player wins
  else if (guess === secretNumber) {
    updateSecretNumberBox(secretNumber);
    displayMessage("Correct Number!🎉");
    changeBackgroundColor("#60b347");
    styleNumber("30rem");
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    //the player looses
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high! ☝️" : "Too low! 👇");
      score--;
      changeScore(score);
    } else {
      displayMessage("You lost the game! 😭");
      changeBackgroundColor(0);
    }
  }
});

//pley again
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = generateSecretNumber();
  changeScore(score);
  displayMessage("Start guessing...");
  changeBackgroundColor("#222");
  styleNumber("15rem");
  document.querySelector(".guess").value = "";
  updateSecretNumberBox("?");
});
