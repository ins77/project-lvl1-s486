import start, { getRandomNumber } from '..';

const GAME_TITLE = 'Answer "yes" if number even otherwise answer "no".';
const QUESTION_NUMBERS_RANGE = 100;
const ANSWER_YES = 'yes';
const ANSWER_NO = 'no';

const getGameData = () => {
  const randomNumber = getRandomNumber(QUESTION_NUMBERS_RANGE);
  const question = `${randomNumber}`;
  const answer = randomNumber % 2 === 0 ? ANSWER_YES : ANSWER_NO;

  return { question, answer };
};

const startGame = () => start(GAME_TITLE, getGameData);

export default startGame;
