import { getLongestDistanceBetweenPoints } from './index';

describe('getLongestDistanceBetweenPoints', () => {
  it('should return correct value for points with negative coordinates', () => {
    const points = [
      { x: -7, y: -4 },
      { x: 17, y: 6.5 }
    ];
    const expectedDistance = 26.196373794859472;

    expect(getLongestDistanceBetweenPoints(points)).toBe(expectedDistance);
  });

  it('should return correct value for 3 different points', () => {
    const points = [
      { x: 0, y: 0 },
      { x: 1, y: 1 },
      { x: -5, y: -6 }
    ];
    const expectedDistance = 9.219544457292887;

    expect(getLongestDistanceBetweenPoints(points)).toBe(expectedDistance);
  });

  it('should return 0 if no points were passed', () => {
    const points: any[] = [];
    const expectedDistance = 0;

    expect(getLongestDistanceBetweenPoints(points)).toBe(expectedDistance);
  });
});
