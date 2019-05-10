import start from '..';
import getRandomNumber from '../utils';

const gameTitle = 'What is the result of the expression?';
const operationPlus = '+';
const operationMinus = '-';
const operationMultiply = '*';
const questionNumbersTotal = 100;
const operations = [operationMultiply, operationPlus, operationMinus];

const getActualAnswer = (operation, numberOne, numberTwo) => {
  switch (operation) {
    case operationMultiply:
      return numberOne * numberTwo;
    case operationPlus:
      return numberOne + numberTwo;
    case operationMinus:
      return numberOne - numberTwo;
    default:
      return null;
  }
};

const getGameData = () => {
  const randomNumberOne = getRandomNumber(questionNumbersTotal);
  const randomNumberTwo = getRandomNumber(questionNumbersTotal);
  const randomOperation = operations[getRandomNumber(operations.length)];
  const question = `${randomNumberOne} ${randomOperation} ${randomNumberTwo}`;
  const answer = getActualAnswer(randomOperation, randomNumberOne, randomNumberTwo).toString();

  return { question, answer };
};

const startGame = () => start(gameTitle, getGameData);

export default startGame;
