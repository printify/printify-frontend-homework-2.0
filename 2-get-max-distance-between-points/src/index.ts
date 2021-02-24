export type Point = [number, number];

export function getLongestDistanceBetweenPoints(points: Point[]): number {
  let distances = [];
  distances = points.map((point: Point) => {
    return points.map(p => {
      return calculateDistance(point, p)
    })
  })

  return Math.max(...distances.reduce((acc: any, next: any) => {
    acc = [...next]
    return acc;
  }, []));
}

export function calculateDistance(a: Point, b: Point): number {
  return Math.sqrt(Math.pow((b[0] - a[0]), 2) + Math.pow((b[1] - a[1]), 2))
}