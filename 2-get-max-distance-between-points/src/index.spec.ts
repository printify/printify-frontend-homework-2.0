import { getLongestDistanceBetweenPoints } from './index';

describe('getLongestDistanceBetweenPoints', () => {
  let pointA = {x: 3, y: 5};
  let pointB = {x: 10, y: 15};
  let pointC = {x: 4, y: 5};
  let distance = 12.206555615733702;

  it('should return the result between points', () => {
    const result = getLongestDistanceBetweenPoints([pointA, pointB]);
    expect(result).toBeTruthy();
  });

  it('should return the result as number', () => {
    const result = getLongestDistanceBetweenPoints([pointA, pointB]);
    expect(typeof result).toBe('number');
  });

  it('should return the longest distance between points', () => {
    const result = getLongestDistanceBetweenPoints([pointA, pointB]);
    expect(result).toBe(distance);
  });

  it('should return the longest distance between multiple points', () => {
    const result = getLongestDistanceBetweenPoints([pointA, pointB, pointC]);
    expect(result).toBe(distance);
  });

  it('should return 0 if there are no points', () => {
    const result = getLongestDistanceBetweenPoints([]);
    expect(result).toBe(0);
  });
});
