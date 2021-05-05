export function fizzBuzz(): (string | number)[] {
  const resultArray: (string | number)[] = [];

  for (let i = 1; i <= 100; i += 1) {
    let res: string | number = i;
    if (i % 3 === 0 && i % 5 === 0) {
      res = "FizzBuzz";
    } else if (i % 3 === 0) {
      res = "Fizz";
    } else if (i % 5 === 0) {
      res = "Buzz";
    }

    resultArray.push(res);
  }
  // ...

  return resultArray;
}
