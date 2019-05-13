import start from '..';
import getRandomNumberInRange from '../utils';

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
  const randomNumberOne = getRandomNumberInRange(questionNumbersTotal);
  const randomNumberTwo = getRandomNumberInRange(questionNumbersTotal);
  const randomOperation = operations[getRandomNumberInRange(operations.length)];
  const question = `${randomNumberOne} ${randomOperation} ${randomNumberTwo}`;
  const answer = getActualAnswer(randomOperation, randomNumberOne, randomNumberTwo).toString();

  return { question, answer };
};

export default () => start(gameTitle, getGameData);
