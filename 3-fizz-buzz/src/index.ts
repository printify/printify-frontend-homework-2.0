export function fizzBuzz(): (string | number)[] {
  const iterator = {
    start: 1,
    current: 1,
    end: 100,
    [Symbol.iterator]() {
      return {
        next() {
          if (iterator.current > iterator.end) {
            return {
              done: true,
              value: null as any
            };
          }

          const value = iterator.current;
          const isDividableBy3 = value % 3 === 0;
          const isDividableBy5 = value % 5 === 0;
          const isDividableBy3And5 = isDividableBy3 && isDividableBy5;

          iterator.current += 1;

          if (isDividableBy3And5) {
            return {
              done: false,
              value: 'FizzBuzz'
            };
          }

          if (isDividableBy5) {
            return {
              done: false,
              value: 'Buzz'
            };
          }

          if (isDividableBy3) {
            return {
              done: false,
              value: 'Fizz'
            };
          }

          return {
            done: false,
            value: value
          };
        }
      };
    }
  };

  return Array.from(iterator as any);
}
