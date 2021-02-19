/**
 * getLongestDistanceBetweenPoints(
 *  [
 *    { x: 0, y: 1 },
 *    { x: 1, y: 2 },
 *    { x: 3, y: 3 }
 *  ]
 * )
 */

export function getLongestDistanceBetweenPoints(points: any[]) {
  if (!points.length || points.length === 1) {
    return 0;
  }

  let longestDistance = 0;

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const distance = computeDistance(points[i], points[j]);

      longestDistance = Math.max(longestDistance, distance);
    }
  }

  return longestDistance;
}

function computeDistance(point1: any, point2: any) {
  return Math.sqrt(
    Math.pow(point2.x - point1.x, 2) +
    Math.pow(point2.y - point1.y, 2)
  );
}
