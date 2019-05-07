import start, { getRandomNumber } from '..';

const GAME_TITLE = 'Find the greatest common divisor of given numbers.';
const QUESTION_NUMBERS_RANGE = 100;

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
  const randomNumberOne = getRandomNumber(QUESTION_NUMBERS_RANGE);
  const randomNumberTwo = getRandomNumber(QUESTION_NUMBERS_RANGE);
  const question = `${randomNumberOne} ${randomNumberTwo}`;
  const answer = getActualAnswer(randomNumberOne, randomNumberTwo).toString();

  return { question, answer };
};

const startGame = () => start(GAME_TITLE, getGameData);

export default startGame;
