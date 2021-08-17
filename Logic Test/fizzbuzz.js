fizzbuzz = (n) => {
  let result = []
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      result.push("FizzBuzz");
    } else if (i % 3 == 0) {
      result.push("Fizz");
    } else if (i % 5 == 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  console.log(result);
}

console.log("Input: n = 3");
fizzbuzz(3)
console.log("Input: n = 5");
fizzbuzz(5)
console.log("Input: n = 15");
fizzbuzz(15)