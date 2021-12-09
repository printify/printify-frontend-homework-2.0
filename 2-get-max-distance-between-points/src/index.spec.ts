import { getLongestDistanceBetweenPoints, Point } from './index';

describe('getLongestDistanceBetweenPoints', () => {
  it('should work', () => {
    const points: Point[] = [
      [1,1],
      [2,2],
      [3,3],
      [4,4],
      [5,5]
    ]

    expect(getLongestDistanceBetweenPoints(points)).toBe(100)
  });
});
