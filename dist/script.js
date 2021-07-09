let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.trunc(Math.random() * 10);
const compareGuesses = (humanGuess, computerGuess, secretNumberTarget) => {
  if (humanGuess < 0 || humanGuess > 9) {
    alert('Input should be in the range of 0-9');
    humanGuessInput.value = '';
    humanGuessInput.focus();
    return;
  }
  
  const isHumanCloseToTarget = getAbsoluteDistance(humanGuess, secretNumberTarget);
  const isComputerCloseToTarget = getAbsoluteDistance(computerGuess, secretNumberTarget);
  
  if (isHumanCloseToTarget === isComputerCloseToTarget) return true;

  return isHumanCloseToTarget < isComputerCloseToTarget;
};

const getAbsoluteDistance = (guess, secretNumber) => Math.abs(secretNumber - guess);
const updateScore = displayWinner => {
  if (displayWinner === 'human') humanScore++;
  else if (displayWinner === 'computer') computerScore++;
};

const advanceRound = () => {
  currentRoundNumber++;
};
