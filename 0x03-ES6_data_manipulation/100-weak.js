// 100-weak.js

// Create a WeakMap to track API query counts
export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!(endpoint instanceof Object)) {
    throw new Error('Cannot process');
  }

  // Get the current count for this endpoint
  let count = weakMap.get(endpoint) || 0;

  // Increment the count
  count += 1;

  // Check if the count exceeds or equals 5
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }

  // Update the WeakMap with the new count
  weakMap.set(endpoint, count);
}
