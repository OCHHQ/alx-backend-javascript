const express = require('express');
const fs = require('fs').promises;

async function countStudents(path) {
  try {
    // Read the file content
    const data = await fs.readFile(path, 'utf8');

    // Split the data into lines and filter out empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Remove the header
    const studentData = lines.slice(1);

    // Initialize counters and lists for different fields
    const fields = {};

    // Process each student line
    studentData.forEach((line) => {
      const [firstname, , , field] = line.split(',');

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    // Prepare the output
    let output = `Number of students: ${studentData.length}\n`;

    for (const [field, students] of Object.entries(fields)) {
      output += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
    }

    return output.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

// Create Express app
const app = express();
const PORT = 1245;

// Route for root path
app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

// Route for students path
app.get('/students', async (req, res) => {
  const databasePath = process.argv[2];

  if (!databasePath) {
    res.status(500).send('Database path not provided');
    return;
  }

  try {
    // Check if file exists before reading
    await fs.access(databasePath);

    const studentInfo = await countStudents(databasePath);
    res.status(200).send(`This is the list of our students\n${studentInfo}`);
  } catch (error) {
    res.status(500).send('Cannot load the database');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
