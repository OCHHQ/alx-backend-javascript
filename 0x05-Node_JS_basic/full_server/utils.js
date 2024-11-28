import fs from 'fs';

const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        reject(error);
      } else {
        // Split lines and filter out empty lines
        const lines = data.split('\n').filter(line => line.trim() !== '');
        
        // Remove header
        const studentData = lines.slice(1);
        
        // Initialize object to store students by field
        const studentsByField = {};
        
        // Process each student line
        studentData.forEach(line => {
          const [firstname, , , field] = line.split(',');
          
          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }
          studentsByField[field].push(firstname);
        });
        
        resolve(studentsByField);
      }
    });
  });
};

export default readDatabase;