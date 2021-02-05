interface PointInterface {
  x: number;
  y: number;
};

function getLongestDistanceBetweenPairOfPoints(pointA: PointInterface, pointB: PointInterface): number {
  const xDiff = Math.pow(pointB.x - pointA.x, 2);
  const yDiff = Math.pow(pointB.y - pointA.y, 2);
  return Math.sqrt(xDiff + yDiff);
}

export function getLongestDistanceBetweenPoints(points: PointInterface[]): number {
  if (!points.length) { return 0; }
  let results: number[] = [];
  points.forEach((point: PointInterface, i) => {
    points.forEach((comparePoint: PointInterface) => {
      results.push(getLongestDistanceBetweenPairOfPoints(point, comparePoint));
    });
  });

  return Math.max(...results);
}
