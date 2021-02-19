export function getLongestDistanceBetweenPoints(points: {x: number, y: number}[]) {
  let longuestDistante: number = 0;
  let distance: number;

  if (points.length >= 2) {
    for(let i = 0; i < points.length; i++) {
      for(let j = 1; j < points.length; j++) {
        distance = Math.sqrt(Math.pow(points[j].x -  points[i].x, 2) + Math.pow(points[j].y - points[i].y, 2));
        if (distance >= longuestDistante) {
          longuestDistante = distance;
        }
      }
    }
  }
  return longuestDistante;
}
