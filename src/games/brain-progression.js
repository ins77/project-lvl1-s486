import start, { getRandomNumber } from '..';

const RANDOM_NUMBER_RANGE = 100;
const PROGRESSION_STEP = 2;
const PROGRESSION_RANGE = 10;
const HIDDEN_STEP_VALUE = '..';

const getProgression = () => {
  const iter = (number, array) => {
    if (array.length === PROGRESSION_RANGE) {
      return array;
    }

    return iter(number + PROGRESSION_STEP, [...array, number]);
  };

  return iter(getRandomNumber(RANDOM_NUMBER_RANGE), []);
};

const getQuestion = (progression, hiddenStepNumber) => {
  const newProgression = [...progression];

  newProgression[hiddenStepNumber] = HIDDEN_STEP_VALUE;

  return [
    ...newProgression.slice(0, hiddenStepNumber),
    '..',
    ...newProgression.slice(hiddenStepNumber + 1, newProgression.length),
  ].join(' ');
};

const gameFn = () => {
  const progression = getProgression();
  const hiddenStepNumber = getRandomNumber(progression.length);
  const question = getQuestion(progression, hiddenStepNumber);
  const answer = progression[hiddenStepNumber].toString();

  return { question, answer };
};

const startGame = () => {
  const gameTitle = 'What number is missing in the progression?';

  return start(gameTitle, gameFn);
};

export default startGame;
