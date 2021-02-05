export function _deepCopy(data: {[key: string]: any}) {
  return JSON.parse(JSON.stringify(data));
}