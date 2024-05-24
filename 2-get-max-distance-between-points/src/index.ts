export interface Point {
  x: number;
  y: number;
}

// [{ x: 0, y: 10 }, { x: 10, y: 50 }, { x: 40, y: 40 }, { x: 25, y: 30 }]
// largest distance should be 50
export function getLongestDistanceBetweenPoints(points: Point[]): number {
  if (!points?.length) {
    throw new Error("Invalid inputs");
  }

  let longestDistance = 0;

  // O(pow(N, 2))
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const distance = getDistanceBetweenTwoPoints(points[i], points[j]);

      longestDistance = Math.max(longestDistance, distance);
    }
  }

  return longestDistance;
}

function getDistanceBetweenTwoPoints(point1: Point, point2: Point): number {
  // sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2))
  const xDiff = point2.x - point1.x;
  const yDiff = point2.y - point1.y;
  return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
}
