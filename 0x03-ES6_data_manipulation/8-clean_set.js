export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  // Filter and map values that start with the startString
  const result = [...set]
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length));

  // Join the result array with '-'
  return result.join('-');
}
