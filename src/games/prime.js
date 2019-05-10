import start from '..';
import getRandomNumber from '../utils';

const answerYes = 'yes';
const answerNo = 'no';
const questionNumbersTotal = 10;
const questionNumbersBottom = 1;
const gameTitle = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const iter = (count) => {
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

const getActualAnswer = isNumberPrime => (isNumberPrime ? answerYes : answerNo);

const getGameData = () => {
  const randomNumber = getRandomNumber(questionNumbersTotal, questionNumbersBottom);
  const question = `${randomNumber}`;
  const answer = getActualAnswer(isPrime(randomNumber));

  return { question, answer };
};

const startGame = () => start(gameTitle, getGameData);

export default startGame;
