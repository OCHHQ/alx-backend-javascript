// 7-has_array_values.js

export default function hasValuesFromArray(set, array) {
  // Use the 'every' method to ensure all elements of the array exist in the set
  return array.every((value) => set.has(value));
}
