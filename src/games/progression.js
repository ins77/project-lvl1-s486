import start from '..';
import getRandomNumberInRange from '../utils';

const gameTitle = 'What number is missing in the progression?';
const questionNumbersTotal = 100;
const progressionStepsTotal = 10;
const progressionStepsBottom = 1;
const progressionValuesTotal = 10;

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
  progression.map((item, index) => (
    index === hiddenStepNumber ? '..' : item
  )).join(' ')
);

const getGameData = () => {
  const questionNumber = getRandomNumberInRange(questionNumbersTotal);
  const progressionStep = getRandomNumberInRange(progressionStepsTotal, progressionStepsBottom);
  const progression = getProgression(questionNumber, progressionStep, progressionValuesTotal);
  const hiddenStepNumber = getRandomNumberInRange(progression.length);
  const question = getQuestion(progression, hiddenStepNumber);
  const answer = progression[hiddenStepNumber].toString();

  return { question, answer };
};

export default () => start(gameTitle, getGameData);
