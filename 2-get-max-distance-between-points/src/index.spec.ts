import { getLongestDistanceBetweenPoints } from "./index";

describe("getLongestDistanceBetweenPoints", () => {
  it("should return 0 for a single point", () => {
    expect(getLongestDistanceBetweenPoints([[0, 3]])).toEqual(0);
    expect(getLongestDistanceBetweenPoints([[2, 0]])).toEqual(0);
    expect(getLongestDistanceBetweenPoints([[1, 3]])).toEqual(0);
  });

  it("should return distance for many points", () => {
    expect(getLongestDistanceBetweenPoints([[0, 3], [0, 5]])).toEqual(2);
    expect(getLongestDistanceBetweenPoints([[2, 0], [5, 0]])).toEqual(3);
    expect(getLongestDistanceBetweenPoints([[2, 0], [5, 0], [6, 0]])).toEqual(4);
    expect(getLongestDistanceBetweenPoints([[2, 0], [5, 0], [6, 0], [10, 0]])).toEqual(8);
    expect(getLongestDistanceBetweenPoints([[2, 1], [5, 1], [10, 1], [12, 1], [14, 1]])).toEqual(12);
  });

  it("should return NaN for no points", () => {
    expect(getLongestDistanceBetweenPoints([])).toEqual(0);
  });
});
