/** Create a counter function using closures that increametns and returns the count on each Call */

function counterIncrease() {
  let count = 0;
  return function () {
    return ++count;
  };
}
let counter = counterIncrease();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

let array = ["java", "quiz"];
let str = array.toString();
console.log(str);
