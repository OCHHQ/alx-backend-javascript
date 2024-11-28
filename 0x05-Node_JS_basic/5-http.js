const http = require('http');
const fs = require('fs');
const path = require('path');

// Function to count students in a CSV file and display their information
const countStudents = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return reject(new Error('Cannot load the database'));
    }

    const lines = data.trim().split('\n');
    const students = [];
    const studentsByField = {};

    lines.forEach((line, index) => {
      // Skip header
      if (index === 0) return;

      const [firstName, field] = line.split(',');
      if (firstName && field) {
        students.push(firstName);
        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstName);
      }
    });

    // Construct response
    let response = `Number of students: ${students.length}\n`;
    for (const [field, names] of Object.entries(studentsByField)) {
      response += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    }

    resolve(response.trim());
  });
});

// Create the HTTP server
const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    // Handle the root route
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    // Handle the /students route
    const databasePath = process.argv[2];
    if (!databasePath) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Database file path is required as an argument.\n');
      return;
    }

    try {
      const studentsList = await countStudents(databasePath);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`This is the list of our students\n${studentsList}\n`);
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(error.message);
    }
  } else {
    // Handle unsupported routes
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app for potential external use
module.exports = app;
