// main.ts

// I Define an interface named Student
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Created two students
  const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 21,
    location: 'New York',
  };
  
  const student2: Student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 22,
    location: 'London',
  };
  
  // Create an array named studentsList containing the two students
  const studentsList: Student[] = [student1, student2];
  
  // Render a table with Vanilla JS
  const body = document.querySelector('body');
  const table = document.createElement('table');
  const tableBody = document.createElement('tbody');
  
  studentsList.forEach((student) => {
    const row = document.createElement('tr');
  
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
  
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
  
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tableBody.appendChild(row);
  });
  
  table.appendChild(tableBody);
  body?.appendChild(table);
  