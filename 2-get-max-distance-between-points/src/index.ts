export function getLongestDistanceBetweenPoints(
  points: [number, number][] = []
): number {

    let pointer = 0;
    let longest = 0;

    while (pointer <= points.length) {
        for (let i = pointer; i < points.length; i += 1) {
            longest = Math.max(distance(points[pointer], points[i]), longest);
        }
        pointer += 1;
    }

    return longest;
}

function distance(p1: [number, number], p2: [number, number]): number {
  return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
}
