/**
For a given natural number greater zero return
● “Fizz” if the number is divisible by 3
● “Buzz” if the number is divisible by 5
● The number if it is not divisible by both 3 and 5
  Input Result
  1       1
  2       2
  3       Fizz
  4       4
  5       Buzz
  6       Fizz
  9       Fizz
  10      Buzz
  15      FizzBuzz
  20      Buzz
  30      FizzBuzz
  75      FizzBuzz

Bonus
Add the following new rule, if a number is prime return Whizz. Only worry about numbers up to 100.
  Input Result
  1      1
  2      Whizz
  3      FizzWhizz
  4      4
  5      BuzzWhizz
 */
const isPrime = (n: number): boolean => {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

export const game = (input: number) => {
  let result = "";

  if (input % 3 === 0) result += "Fizz";
  if (input % 5 === 0) result += "Buzz";
  if (isPrime(input)) result += "Whizz";

  return result || input;
};

export const gameUpTo = (n: number): (string | number)[] => {
  if (!Number.isInteger(n) || n < 1) {
    throw new Error("n must be a natural number greater than zero");
  }
  return Array.from({ length: n }, (_, i) => game(i + 1));
};

