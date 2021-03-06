import start from '..';
import getRandomNumberInRange from '../utils';

const gameTitle = 'Find the greatest common divisor of given numbers.';
const questionNumbersTotal = 100;

const getActualAnswer = (numberFirst, numberSecond) => {
  const iter = (count) => {
    if (count <= 1) {
      return 1;
    }

    const isNumbersDivisible = numberFirst % count === 0 && numberSecond % count === 0;

    return isNumbersDivisible ? count : iter(count - 1);
  };

  return iter(Math.min(numberFirst, numberSecond));
};

const getGameData = () => {
  const randomNumberOne = getRandomNumberInRange(questionNumbersTotal);
  const randomNumberTwo = getRandomNumberInRange(questionNumbersTotal);
  const question = `${randomNumberOne} ${randomNumberTwo}`;
  const answer = getActualAnswer(randomNumberOne, randomNumberTwo).toString();

  return { question, answer };
};

export default () => start(gameTitle, getGameData);
