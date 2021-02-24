export function fizzBuzz(count = 100, from = 0): (string | number)[] {
  return [...Array(count)].map(() => {
    from++;
    switch (true) {
      case isFizzBuzz(from):
        return `FizzBuzz`;
        break;
      case isFizz(from):
        return `Fizz`;
        break;
      case isBuzz(from):
        return `Buzz`;
        break;
      default:
        return from;
    }
  });
}

function isFizz(num: number): boolean {
  return !isNaN(num) && (num % 3 === 0)
}

function isBuzz(num: number): boolean {
  return !isNaN(num) && (num % 5 === 0)
}

function isFizzBuzz(num: number): boolean {
  return isFizz(num) && isBuzz(num)
}
