import start, { getRandomNumber } from '..';

const ANSWER_YES = 'yes';
const ANSWER_NO = 'no';
const QUESTION_NUMBERS_RANGE = 10;
const GAME_TITLE = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const getGameData = () => {
  const randomNumber = getRandomNumber(QUESTION_NUMBERS_RANGE) + 1;
  const question = `${randomNumber}`;
  const answer = getActualAnswer(randomNumber);

  return { question, answer };
};

const startGame = () => start(GAME_TITLE, getGameData);

export default startGame;
