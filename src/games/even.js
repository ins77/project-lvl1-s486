import start from '..';
import getRandomNumberInRange from '../utils';

const gameTitle = 'Answer "yes" if number even otherwise answer "no".';
const questionNumbersTotal = 100;

const isEven = number => number % 2 === 0;

const getGameData = () => {
  const randomNumber = getRandomNumberInRange(questionNumbersTotal);
  const question = `${randomNumber}`;
  const answer = isEven(randomNumber) ? 'yes' : 'no';

  return { question, answer };
};

export default () => start(gameTitle, getGameData);
