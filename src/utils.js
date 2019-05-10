const getRandomNumberInRange = (size, begin = 0) => (
  Math.floor(Math.random() * size) + begin
);

export default getRandomNumberInRange;
