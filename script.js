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

let resultParagraph1 = document.getElementById("player1"); // Get the <p> element for player 1
let resultParagraph2 = document.getElementById("player2"); // Get the <p> element for player 2
let score1Element = document.getElementById("score1");
let score2Element = document.getElementById("score2");
let playerScore1 = 0; // Initialize player 1's score
let playerScore2 = 0; // Initialize player 2's score

let choices = ["Bato", "papel", "Gunting"];

function gameFunction() {
  let randomIndex = Math.floor(Math.random() * 3);
  let randomChoice = choices[randomIndex]; // Accessing the random choice from the array
  if (event.target.textContent === "Player 1 roll") {
    resultParagraph1.textContent = randomChoice; // Set the text content of the <p> element for player 1
  } else {
    resultParagraph2.textContent = randomChoice; // Set the text content of the <p> element for player 2
  }

  setTimeout(() => {
    // Compare choices after both players have made their selections
    if (
      resultParagraph1.textContent === "Bato" &&
      resultParagraph2.textContent === "Bato"
    ) {
      alert("it's a tie");
    } else if (
      resultParagraph1.textContent === "Bato" &&
      resultParagraph2.textContent === "papel"
    ) {
      alert("Player 2 wins!");
      playerScore2++; // Increment player 2's score
      score2Element.textContent = playerScore2;
    } else if (
      resultParagraph1.textContent === "Bato" &&
      resultParagraph2.textContent === "Gunting"
    ) {
      alert("Player 1 wins");
      playerScore1++; // Increment player 2's score
      score1Element.textContent = playerScore1;
    } else if (
      resultParagraph1.textContent === "papel" &&
      resultParagraph2.textContent === "papel"
    ) {
      alert("it's a tie!");
    } else if (
      resultParagraph1.textContent === "papel" &&
      resultParagraph2.textContent === "Bato"
    ) {
      alert("Player 1 wins");
      playerScore1++; // Increment player 2's score
      score1Element.textContent = playerScore1;
    } else if (
      resultParagraph1.textContent === "papel" &&
      resultParagraph2.textContent === "Gunting"
    ) {
      alert("Player 2 wins!");
      playerScore2++; // Increment player 2's score
      score2Element.textContent = playerScore2;
    } else if (
      resultParagraph1.textContent === "Gunting" &&
      resultParagraph2.textContent === "Gunting"
    ) {
      alert("it's a tie");
    } else if (
      resultParagraph1.textContent === "Gunting" &&
      resultParagraph2.textContent === "Bato"
    ) {
      alert("Player 2 wins!");
      playerScore2++; // Increment player 2's score
      score2Element.textContent = playerScore2;
    } else if (
      resultParagraph1.textContent === "Gunting" &&
      resultParagraph2.textContent === "papel"
    ) {
      alert("Player 1 wins");
      playerScore1++; // Increment player 2's score
      score1Element.textContent = playerScore1;
    }
  }, 400); // Adjust the delay time if necessary
}

function newRound() {
  resultParagraph1.textContent = "?";
  resultParagraph2.textContent = "?";
}

function resetGame() {
  window.location.reload();
}
