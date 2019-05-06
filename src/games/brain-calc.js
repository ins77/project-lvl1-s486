import start, { getRandomNumber } from '..';

const getActualAnswer = (randomNumberOne, randomNumberTwo, randomOperation) => {
  switch (randomOperation) {
    case '*':
      return randomNumberOne * randomNumberTwo;
    case '+':
      return randomNumberOne + randomNumberTwo;
    case '-':
      return randomNumberOne - randomNumberTwo;
    default:
      return null;
  }
};

const gameFn = () => {
  const randomNumberOne = getRandomNumber(100);
  const randomNumberTwo = getRandomNumber(100);
  const operations = ['*', '+', '-'];
  const randomOperation = operations[getRandomNumber(operations.length)];
  const question = `${randomNumberOne} ${randomOperation} ${randomNumberTwo}`;
  const answer = getActualAnswer(randomNumberOne, randomNumberTwo, randomOperation).toString();

  return { question, answer };
};

const startGame = () => {
  const gameTitle = 'What is the result of the expression?';

  return start(gameTitle, gameFn);
};

export default startGame;
