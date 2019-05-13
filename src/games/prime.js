import start from '..';
import getRandomNumberInRange from '../utils';

const questionNumbersTotal = 10;
const questionNumbersBottom = -3;
const gameTitle = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const iter = (count) => {
    if (number <= 1) {
      return false;
    }

    if (count > number / 2) {
      return true;
    }

    if (number % count === 0) {
      return false;
    }

    return iter(count + 1);
  };

  return iter(2);
};

const getActualAnswer = isNumberPrime => (isNumberPrime ? 'yes' : 'no');

const getGameData = () => {
  const randomNumber = getRandomNumberInRange(questionNumbersTotal, questionNumbersBottom);
  const question = `${randomNumber}`;
  const answer = getActualAnswer(isPrime(randomNumber));

  return { question, answer };
};

export default () => start(gameTitle, getGameData);
