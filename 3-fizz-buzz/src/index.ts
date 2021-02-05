export function fizzBuzz(): (string | number)[] {
  const resultArray: (string | number)[] = [];
  for(let i = 1; i <=100; i++) {
    let result: string | number = i;
    if(!(i%3) && !(i%5)) {
      result = 'FizzBuzz';
    } else if(!(i%3)) {
      result = 'Fizz';
    } else if(!(i%5)) {
      result = 'Buzz'; 
    }
    resultArray.push(result);
  }

  return resultArray;
}
