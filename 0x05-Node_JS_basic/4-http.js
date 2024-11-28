// Import the http module
const http = require('http');

// Create the HTTP server
const app = http.createServer((req, res) => {
  // Set the response header to indicate plain text content
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Write the response content
  res.end('Hello Holberton School!\n');
});

// Make the server listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the server for potential external use
module.exports = app;
