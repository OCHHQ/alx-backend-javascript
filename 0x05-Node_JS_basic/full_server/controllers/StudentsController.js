import readDatabase from '../utils.js';

class StudentsController {
  static getAllStudents(req, res) {
    const databasePath = process.argv[2];
    
    readDatabase(databasePath)
      .then((studentsByField) => {
        // Sort fields alphabetically (case-insensitive)
        const sortedFields = Object.keys(studentsByField).sort((a, b) => 
          a.toLowerCase().localeCompare(b.toLowerCase())
        );
        
        let responseText = 'This is the list of our students\n';
        
        sortedFields.forEach(field => {
          const students = studentsByField[field];
          responseText += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
        });
        
        res.status(200).send(responseText.trim());
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const databasePath = process.argv[2];
    
    // Validate major
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    
    readDatabase(databasePath)
      .then((studentsByField) => {
        const students = studentsByField[major] || [];
        res.status(200).send(`List: ${students.join(', ')}`);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;