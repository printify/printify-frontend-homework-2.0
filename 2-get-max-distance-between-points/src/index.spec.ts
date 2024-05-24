import { getLongestDistanceBetweenPoints, Point } from "./index";

// largest distance should be 50
describe("getLongestDistanceBetweenPoints", () => {
  it("should work with an array of data", () => {
    // Given
    const points: Point[] = [
      { x: 0, y: 10 },
      { x: 10, y: 50 },
      { x: 40, y: 40 },
      { x: 25, y: 30 },
    ];
    const expected = 50;

    // Act
    const result = getLongestDistanceBetweenPoints(points);

    // Assert
    expect(result).toBeCloseTo(expected);
  });
});
