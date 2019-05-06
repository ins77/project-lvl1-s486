import start, { getRandomNumber } from '..';

const gameFn = () => {
  const randomNumber = getRandomNumber(100);
  const question = `${randomNumber}`;
  const answer = randomNumber % 2 === 0 ? 'yes' : 'no';

  return { question, answer };
};

const startGame = () => {
  const gameTitle = 'Answer "yes" if number even otherwise answer "no".';

  return start(gameTitle, gameFn);
};

export default startGame;
