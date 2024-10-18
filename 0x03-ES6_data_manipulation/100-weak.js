// Create an instance of WeakMap
export const weakMap = new WeakMap();

// Function to track API queries
export function queryAPI(endpoint) {
  // Check if the endpoint already exists in the weakMap
  const queryCount = weakMap.get(endpoint) || 0;

  // Increment the count
  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }

  // Set the updated count back into the weakMap
  weakMap.set(endpoint, queryCount + 1);
}
