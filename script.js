let player1Score = 0;
let player2Score = 0;
let game = ["rock", "paper", "scissors"];
let playerImage1 = document.getElementById("playerImage1");
let playerImage2 = document.getElementById("playerImage2");

function player1Roll() {
  let roll = Math.floor(Math.random() * 3);
  playerImage1.textContent = game[roll];
  return game[roll];
}

function player2Roll() {
  console.log("player2Roll called");
  let roll = Math.floor(Math.random() * 3);
  playerImage2.textContent = game[roll];
  console.log("Player 2 rolled: " + game[roll]);
  return game[roll];
}
