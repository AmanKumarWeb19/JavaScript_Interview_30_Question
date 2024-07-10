/** Implement a private variable using Closures. */

function createCounter() {
  //private variable

  let count = 0;

  // Inner Function

  function Increment() {
    count++;
    console.log("Count :", count);
  }

  return {
    IncrementCounter: function () {
      Increment();
    },
    GetCount: function () {
      return count;
    },
  };
}

let counter = createCounter();
counter.IncrementCounter();
counter.IncrementCounter();
counter.IncrementCounter();
counter.IncrementCounter();
console.log(counter.GetCount())
