import readlineSync from 'readline-sync';

export const getRandomNumber = number => Math.floor(Math.random() * number);

const NUMBER_OF_QUESTIONS = 3;
const ANSWER_CORRECT = 'Correct!';

const sayWelcome = () => {
  console.log('Welcome to the Brain Games!');
};

const sayGameRule = (str) => {
  console.log(str);
};

const sayHello = (name) => {
  console.log(`Hello, ${name}!\n`);
};

const getAnswerResultText = (realAnswer, actualAnswer, name) => {
  if (realAnswer === actualAnswer) {
    return ANSWER_CORRECT;
  }

  return `"${realAnswer}" is wrong answer ;(. Correct answer was "${actualAnswer}". Let's try again, ${name}!`;
};

const startQuestions = (
  name,
  gameFn,
  questionsNumber = NUMBER_OF_QUESTIONS,
  value = ANSWER_CORRECT,
  count = 1,
) => {
  if (value !== ANSWER_CORRECT) {
    return null;
  }

  if (count > questionsNumber) {
    console.log(`Congratulations, ${name}!`);

    return null;
  }

  const { question, answer } = gameFn();

  console.log(`Question: ${question}`);

  const realAnswer = readlineSync.question('Your answer: ');
  const answerResult = getAnswerResultText(realAnswer, answer, name);

  console.log(answerResult);

  return startQuestions(name, gameFn, questionsNumber, answerResult, count + 1);
};

const start = (title, gameFn) => {
  sayWelcome();

  if (title) {
    sayGameRule(title);
  }

  const name = readlineSync.question('\nMay I have your name? ');

  sayHello(name);

  if (gameFn) {
    startQuestions(name, gameFn);
  }
};

export default start;
