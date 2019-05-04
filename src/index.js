import readlineSync from 'readline-sync';

const NUMBER_OF_QUESTIONS = 3;
const ANSWER_CORRECT = 'Correct!';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');

const name = readlineSync.question('\nMay I have your name? ');

export const sayHello = () => {
  console.log(`Hello, ${name}!\n`);
};

const getAnswerResultText = (randomNumber, answer) => {
  const isEven = randomNumber % 2 === 0;

  if ((isEven && answer === 'yes') || (!isEven && answer === 'no')) {
    return ANSWER_CORRECT;
  }

  return isEven && answer !== 'yes'
    ? `"no" is wrong answer ;(. Correct answer was "yes". Let's try again, ${name}!`
    : `"yes" is wrong answer ;(. Correct answer was "no". Let's try again, ${name}!`;
};

const startQuestions = (count, value, questionsNumber) => {
  if (value !== ANSWER_CORRECT) {
    return null;
  }

  if (count > questionsNumber) {
    console.log(`Congratulations, ${name}!`);

    return null;
  }

  const randomNumber = Math.ceil(Math.random() * 100);

  console.log(`Question: ${randomNumber}`);

  const answer = readlineSync.question('Your answer: ');
  const answerResult = getAnswerResultText(randomNumber, answer);

  console.log(answerResult);

  return startQuestions(count + 1, answerResult, questionsNumber);
};

export const startGame = () => startQuestions(1, ANSWER_CORRECT, NUMBER_OF_QUESTIONS);
