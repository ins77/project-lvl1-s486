import readlineSync from 'readline-sync';

const start = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('\nMay I have your name? ');

  console.log(`Hello, ${name}!\n`);
};

export default start;
