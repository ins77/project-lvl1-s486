import start, { getRandomNumber } from '..';

const GAME_TITLE = 'What number is missing in the progression?';
const QUESTION_NUMBERS_RANGE = 100;
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

  return iter(getRandomNumber(QUESTION_NUMBERS_RANGE), []);
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

const getGameData = () => {
  const progression = getProgression();
  const hiddenStepNumber = getRandomNumber(progression.length);
  const question = getQuestion(progression, hiddenStepNumber);
  const answer = progression[hiddenStepNumber].toString();

  return { question, answer };
};

const startGame = () => start(GAME_TITLE, getGameData);

export default startGame;
