//Setting up game conditions
const scoreToWin = 5;
let playerPoints = 0;
let computerPoints = 0;
const rockPaperScissors = ["Sten", "Påse", "Sax"];
let computerGuess = 0;
gameOver = false;
playerWonRound = false;
computerWonRound = false;
// 1 beats 2, 2 beats 3, 3 beats 1
// 1 -> 2
// 2 -> 3
// 3 -> 1

//Finding HTML elements
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const gameState = document.getElementById("gameStateContainer");
const scoreContainer = document.getElementById("scoreTracker");

//Game logic

//1 = rock, 2 = paper, 3 = scissors
function rockGuess() {
  //random number between 1-3
  computerGuess = Math.floor(Math.random() * 3) + 1;
  if (computerGuess === 1) {
  } else if (computerGuess === 2) {
    computerPoints++;
    computerWonRound = true;
  } else {
    playerPoints++;
    playerWonRound = true;
  }
  writeGameScore(playerPoints, computerPoints);
  writeGameState(1, computerGuess);
}

//1 = rock, 2 = paper, 3 = scissors
function paperGuess() {
  //random number between 1-3
  computerGuess = Math.floor(Math.random() * 3) + 1;
  if (computerGuess === 1) {
    playerPoints++;
    playerWonRound = true;
  } else if (computerGuess === 2) {
  } else {
    computerPoints++;
    computerWonRound = true;
  }
  writeGameScore(playerPoints, computerPoints);
  writeGameState(2, computerGuess);
}

//1 = rock, 2 = paper, 3 = scissors
function scissorsGuess() {
  //random number between 1-3
  computerGuess = Math.floor(Math.random() * 3) + 1;
  if (computerGuess === 1) {
    computerPoints++;
    computerWonRound = true;
  } else if (computerGuess === 2) {
    playerPoints++;
    playerWonRound = true;
  } else {
  }
  writeGameScore(playerPoints, computerPoints);
  writeGameState(3, computerGuess);
}

//Function based on which button's pressed
rock.addEventListener("click", rockGuess);
paper.addEventListener("click", paperGuess);
scissors.addEventListener("click", scissorsGuess);

function writeGameState(playerGuess, computerGuess) {
  //Write selections to gameStateContainer
  if (
    playerPoints < scoreToWin &&
    computerPoints < scoreToWin &&
    gameOver === false
  ) {
    while (gameState.firstChild) {
      gameState.firstChild.remove();
    }
    let playerGuessElement = document.createElement("h2");
    playerGuessElement.textContent = `You picked: ${
      rockPaperScissors[playerGuess - 1]
    }`;
    gameState.appendChild(playerGuessElement);
    let computerGuessElement = document.createElement("h2");
    computerGuessElement.textContent = `The computer picked: ${
      rockPaperScissors[computerGuess - 1]
    }`;
    gameState.appendChild(computerGuessElement);
  } else if (gameOver === false) {
    if (playerPoints === scoreToWin) {
      let playerWinsMessage = document.createElement("h1");
      playerWinsMessage.textContent = "You win!";
      scoreContainer.appendChild(playerWinsMessage);
      gameOver = true;
    } else if (computerPoints === scoreToWin) {
      let ComputerWinsMessage = document.createElement("h1");
      ComputerWinsMessage.textContent = "The computer wins!";
      scoreContainer.appendChild(ComputerWinsMessage);
      gameOver = true;
    }
  }
  //Checks who won
  if (gameOver === false) {
    if (computerWonRound === true) {
      let computerWonRoundElement = document.createElement("h2");
      computerWonRoundElement.textContent = "The computer wins the round!";
      gameState.appendChild(computerWonRoundElement);
    } else if (playerWonRound === true) {
      let playerWonRoundElement = document.createElement("h2");
      playerWonRoundElement.textContent = "The player wins the round!";
      gameState.appendChild(playerWonRoundElement);
    } else {
      let RoundDrawElement = document.createElement("h2");
      RoundDrawElement.textContent = "It's a draw!";
      gameState.appendChild(RoundDrawElement);
    }
    computerWonRound = false;
    playerWonRound = false;
  }
}

function writeGameScore(playerPoints, computerPoints) {
  if (gameOver === false) {
    while (scoreContainer.firstChild) {
      scoreContainer.firstChild.remove();
    }
    let scoreTextPlayer = document.createElement("h3");
    scoreTextPlayer.textContent = `YOUR SCORE \n\n\n${playerPoints}`;
    scoreContainer.appendChild(scoreTextPlayer);
    let scoreTextComputer = document.createElement("h3");
    scoreTextComputer.textContent = `COMPUTER SCORE \n\n\n${computerPoints}`;
    scoreContainer.appendChild(scoreTextComputer);
  }
}
