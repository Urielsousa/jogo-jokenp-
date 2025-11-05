const result = document.querySelector(".result");
const humanScore = document.querySelector("#human-score");
const machineScore = document.querySelector("#machine-score");

let humanScoreNumber = 0;
let machineScoreNumber = 0;

const playHuman = (humanChoice) => {
  playTheGame(humanChoice, playMachine());
};

const playMachine = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

const playTheGame = (humanChoice, machineChoice) => {
  console.log(" humano: " + humanChoice + " maquina: " + machineChoice);
  if (humanChoice === machineChoice) {
    result.innerHTML = "Deu Empate!";
  } else if (
    (humanChoice === "paper" && machineChoice === "rock") ||
    (humanChoice === "rock" && machineChoice === "scissors") ||
    (humanChoice === "scissors" && machineChoice === "paper")
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
