import start from '..';
import getRandomNumber from '../utils';

const gameTitle = 'What number is missing in the progression?';
const questionNumbersTotal = 100;
const progressionStepsTotal = 10;
const progressionStepsBottom = 1;
const progressionValuesTotal = 10;
const hiddenStepValue = '..';

const getProgression = (begin, step, total) => {
  const iter = (number, array) => {
    if (array.length === total) {
      return array;
    }

    return iter(number + step, [...array, number]);
  };

  return iter(begin, []);
};

const getQuestion = (progression, hiddenStepNumber) => (
  [
    ...progression.slice(0, hiddenStepNumber),
    hiddenStepValue,
    ...progression.slice(hiddenStepNumber + 1, progression.length),
  ].join(' ')
);

const getGameData = () => {
  const questionNumber = getRandomNumber(questionNumbersTotal);
  const progressionStep = getRandomNumber(progressionStepsTotal, progressionStepsBottom);
  const progression = getProgression(questionNumber, progressionStep, progressionValuesTotal);
  const hiddenStepNumber = getRandomNumber(progression.length);
  const question = getQuestion(progression, hiddenStepNumber);
  const answer = progression[hiddenStepNumber].toString();

  return { question, answer };
};

const startGame = () => start(gameTitle, getGameData);

export default startGame;
