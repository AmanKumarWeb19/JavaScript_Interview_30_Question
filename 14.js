// Create a function that generates a random number between a given Range.

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let x = randomNumber(50, 100);
console.log(x);
