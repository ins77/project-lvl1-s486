import start from '..';
import getRandomNumber from '../utils';

const gameTitle = 'Answer "yes" if number even otherwise answer "no".';
const questionNumbersTotal = 100;
const answerYes = 'yes';
const answerNo = 'no';

const isEven = number => number % 2 === 0;

const getGameData = () => {
  const randomNumber = getRandomNumber(questionNumbersTotal);
  const question = `${randomNumber}`;
  const answer = isEven(randomNumber) ? answerYes : answerNo;

  return { question, answer };
};

const startGame = () => start(gameTitle, getGameData);

export default startGame;
