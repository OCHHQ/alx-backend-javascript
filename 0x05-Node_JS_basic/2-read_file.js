const fs = require('fs');

const countStudents = (path) => {
  try {
    // Read file synchronously
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== ''); // Remove empty lines

    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    // Extract header and rows
    const header = lines[0].split(',');
    const rows = lines.slice(1);

    // Initialize variables to store student counts and fields
    const fieldCounts = {};
    const totalStudents = rows.length;

    rows.forEach((row) => {
      const studentData = row.split(',');
      if (studentData.length === header.length) {
        const field = studentData[3]; // Assuming the field is the 4th column (index 3)
        const firstName = studentData[0]; // Assuming first name is the 1st column (index 0)
        if (!fieldCounts[field]) {
          fieldCounts[field] = { count: 0, names: [] };
        }
        fieldCounts[field].count += 1;
        fieldCounts[field].names.push(firstName);
      }
    });

    // Log the total number of students
    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students per field and their names
    for (const [field, { count, names }] of Object.entries(fieldCounts)) {
      console.log(
        `Number of students in ${field}: ${count}. List: ${names.join(', ')}`,
      );
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
