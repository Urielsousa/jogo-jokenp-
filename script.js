const result = document.querySelector(".result");
const humanScore = document.querySelector("#human-score");
const machineScore = document.querySelector("#machine-score");

let humanScoreNumber = 0;
let machineScoreNumber = 0;

const Game_OPTIONS = {
  ROCK: "rock",
  PAPER: "paper",
  SCISSORS: "scissors",
};

const playHuman = (humanChoice) => {
  playTheGame(humanChoice, playMachine());
};

const playMachine = () => {
  const choices = [
    Game_OPTIONS.ROCK,
    Game_OPTIONS.PAPER,
    Game_OPTIONS.SCISSORS,
  ];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

const playTheGame = (humanChoice, machineChoice) => {
  console.log(" humano: " + humanChoice + " maquina: " + machineChoice);
  if (humanChoice === machineChoice) {
    result.innerHTML = "Deu Empate!";
  } else if (
    (humanChoice === Game_OPTIONS.PAPER &&
      machineChoice === Game_OPTIONS.ROCK) ||
    (humanChoice === Game_OPTIONS.ROCK &&
      machineChoice === Game_OPTIONS.SCISSORS) ||
    (humanChoice === Game_OPTIONS.SCISSORS &&
      machineChoice === Game_OPTIONS.PAPER)
  ) {
    humanScoreNumber++;
    humanScore.innerHTML = humanScoreNumber;
    result.innerHTML = "Você Ganhou!";
  } else {
    machineScoreNumber++;
    machineScore.innerHTML = machineScoreNumber;
    result.innerHTML = "Você Perdeu!";
  }
};
