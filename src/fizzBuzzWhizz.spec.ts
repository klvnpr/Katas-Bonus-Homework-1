import { game, gameUpTo } from "./fizzBuzzWhizz";

describe('FizzBuzz Game', () => {
  

  const n = 5;
  test('should works ' + n, () => {
    const result = gameUpTo(n);
    expect(result).toEqual(gameUpTo(n));
  });
  
});