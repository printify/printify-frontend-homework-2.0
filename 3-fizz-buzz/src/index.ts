export function fizzBuzz(): (string | number)[] {
  const resultArray: (string | number)[] = [];

  // I know that we don't have the time but I have implemented the solution I gave you spoken

  for(let i = 1; i <= 100; i++) {
      if(i%3 === 0 && i%5 === 0) {
        resultArray.push('FizzBuzz');
      } else if(i%3 === 0 && i%5 !== 0) {
        resultArray.push('Fizz');
      } else if((i%3 !== 0 && i%5 === 0)) {
        resultArray.push('Buzz');
      } else {
        resultArray.push(i);
      }
  }

  return resultArray;
}
