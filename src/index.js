import readlineSync from 'readline-sync';

const numberOfQuestions = 3;
const answerCorrect = 'Correct!';

const getAnswerResultText = (realAnswer, actualAnswer, name) => {
  if (realAnswer === actualAnswer) {
    return answerCorrect;
  }

  return `"${realAnswer}" is wrong answer ;(. Correct answer was "${actualAnswer}". Let's try again, ${name}!`;
};

const startQuestions = (name, getGameData) => {
  const iter = (count, value) => {
    if (value !== answerCorrect) {
      return null;
    }

    if (count > numberOfQuestions) {
      console.log(`Congratulations, ${name}!`);

      return null;
    }

    const { question, answer } = getGameData();

    console.log(`Question: ${question}`);

    const realAnswer = readlineSync.question('Your answer: ');
    const answerResult = getAnswerResultText(realAnswer, answer, name);

    console.log(answerResult);

    return iter(count + 1, answerResult);
  };

  return iter(1, answerCorrect);
};

const start = (title, getGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(title);

  const name = readlineSync.question('\nMay I have your name? ');

  console.log(`Hello, ${name}!\n`);

  startQuestions(name, getGameData);
};

export default start;
