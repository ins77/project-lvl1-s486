import start, { getRandomNumber } from '..';

const ANSWER_YES = 'yes';
const ANSWER_NO = 'no';

const getActualAnswer = (number) => {
  const iter = (count) => {
    if (count > number / 2) {
      return ANSWER_YES;
    }

    if (number % count === 0) {
      return ANSWER_NO;
    }

    return iter(count + 1);
  };

  return iter(2);
};

const gameFn = () => {
  const randomNumber = getRandomNumber(100);
  const question = `${randomNumber}`;
  const answer = getActualAnswer(randomNumber);

  return { question, answer };
};

const startGame = () => {
  const gameTitle = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  return start(gameTitle, gameFn);
};

export default startGame;
