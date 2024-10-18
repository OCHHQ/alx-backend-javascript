export default function createInt8TypedArray(length, position, value) {
    // Create a new ArrayBuffer of the given length
    const buffer = new ArrayBuffer(length);
    
    // Create a DataView to interact with the ArrayBuffer
    const dataView = new DataView(buffer);
  
    // Check if the position is valid
    if (position >= length) {
      throw new Error('Position outside range');
    }
  
    // Set the Int8 value at the specified position
    dataView.setInt8(position, value);
  
    // Return the DataView
    return dataView;
  }
  