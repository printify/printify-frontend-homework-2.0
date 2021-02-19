import { getLongestDistanceBetweenPoints } from './index';

describe('getLongestDistanceBetweenPoints', () => {
  it('should work', () => {
    const points =  [{x: -7, y: -4}, {x: 17, y: 6.5}];
    expect(getLongestDistanceBetweenPoints(points)).toBe(26.196374);
  });
});
