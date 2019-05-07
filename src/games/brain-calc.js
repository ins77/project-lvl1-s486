import start, { getRandomNumber } from '..';

const GAME_TITLE = 'What is the result of the expression?';
const OPERATION_PLUS = '+';
const OPERATION_MINUS = '-';
const OPERATION_MULTIPLY = '*';
const QUESTION_NUMBERS_RANGE = 100;

const getActualAnswer = (randomNumberOne, randomNumberTwo, randomOperation) => {
  switch (randomOperation) {
    case OPERATION_MULTIPLY:
      return randomNumberOne * randomNumberTwo;
    case OPERATION_PLUS:
      return randomNumberOne + randomNumberTwo;
    case OPERATION_MINUS:
      return randomNumberOne - randomNumberTwo;
    default:
      return null;
  }
};

const getGameData = () => {
  const randomNumberOne = getRandomNumber(QUESTION_NUMBERS_RANGE);
  const randomNumberTwo = getRandomNumber(QUESTION_NUMBERS_RANGE);
  const operations = [OPERATION_MULTIPLY, OPERATION_PLUS, OPERATION_MINUS];
  const randomOperation = operations[getRandomNumber(operations.length)];
  const question = `${randomNumberOne} ${randomOperation} ${randomNumberTwo}`;
  const answer = getActualAnswer(randomNumberOne, randomNumberTwo, randomOperation).toString();

  return { question, answer };
};

const startGame = () => start(GAME_TITLE, getGameData);

export default startGame;
