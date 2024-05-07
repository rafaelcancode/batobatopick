function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const STAR_COUNT = 400;
let result = "";
for (let i = 0; i < STAR_COUNT; i++) {
  result += `${randomNumber(-50, 50)}vw ${randomNumber(
    -50,
    50
  )}vh ${randomNumber(0, 1)}px ${randomNumber(0, 1)}px #fff,`;
}
document.querySelector(".main").style.boxShadow = result.substring(
  0,
  result.length - 1
);

/* let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2"); */
let resultParagraph1 = document.getElementById("player1"); // Get the <p> element for player 1
let resultParagraph2 = document.getElementById("player2"); // Get the <p> element for player 2

let choices = ["rock", "paper", "scissors"];

function gameFunction() {
  let randomIndex = Math.floor(Math.random() * 3);
  let randomChoice = choices[randomIndex]; // Accessing the random choice from the array
  if (event.target.textContent === "Player 1 roll") {
    resultParagraph1.textContent = randomChoice; // Set the text content of the <p> element for player 1
  } else {
    resultParagraph2.textContent = randomChoice; // Set the text content of the <p> element for player 2
  }
}

function resetGame() {
  window.location.reload();
}
