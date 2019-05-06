import start, { getRandomNumber } from '..';

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

const gameFn = () => {
  const randomNumberOne = getRandomNumber(100);
  const randomNumberTwo = getRandomNumber(100);
  const question = `${randomNumberOne} ${randomNumberTwo}`;
  const answer = getActualAnswer(randomNumberOne, randomNumberTwo).toString();
  console.log('answer', answer);

  return { question, answer };
};

const startGame = () => {
  const gameTitle = 'Find the greatest common divisor of given numbers.';

  return start(gameTitle, gameFn);
};

export default startGame;
