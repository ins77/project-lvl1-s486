import readlineSync from 'readline-sync';

const NUMBER_OF_QUESTIONS = 3;
const ANSWER_CORRECT = 'Correct!';
const WELCOME_TEXT = 'Welcome to the Brain Games!';
const QUESTION_NAME = 'May I have your name?';

export const getRandomNumber = number => Math.floor(Math.random() * number);

const getAnswerResultText = (realAnswer, actualAnswer, name) => {
  if (realAnswer === actualAnswer) {
    return ANSWER_CORRECT;
  }

  return `"${realAnswer}" is wrong answer ;(. Correct answer was "${actualAnswer}". Let's try again, ${name}!`;
};

const startQuestions = (name, gameFn) => {
  const iter = (count, value) => {
    if (value !== ANSWER_CORRECT) {
      return null;
    }

    if (count > NUMBER_OF_QUESTIONS) {
      console.log(`Congratulations, ${name}!`);

      return null;
    }

    const { question, answer } = gameFn();

    console.log(`Question: ${question}`);

    const realAnswer = readlineSync.question('Your answer: ');
    const answerResult = getAnswerResultText(realAnswer, answer, name);

    console.log(answerResult);

    return iter(count + 1, answerResult);
  };

  return iter(1, ANSWER_CORRECT);
};

const start = (title, gameFn) => {
  console.log(WELCOME_TEXT);

  if (title) {
    console.log(title);
  }

  const name = readlineSync.question(`\n${QUESTION_NAME} `);

  console.log(`Hello, ${name}!\n`);

  if (gameFn) {
    startQuestions(name, gameFn);
  }
};

export default start;
