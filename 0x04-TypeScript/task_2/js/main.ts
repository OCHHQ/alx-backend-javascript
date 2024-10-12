import { Director, DirectorInterface } from './Director';
import { Teacher, TeacherInterface } from './Teacher';

// Function to create Employee
export function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Type predicate function to check if the employee is a Director
export function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Function to execute work based on employee type
export function executeWork(employee: Director | Teacher) {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}


// Step 1: Define the Subjects string literal type
type Subjects = 'Math' | 'History';

// Step 2: Implement the teachClass function
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  }
}


// Testing the functions
console.log(createEmployee(200));  // Teacher
console.log(createEmployee(1000)); // Director
console.log(createEmployee('$500')); // Director

executeWork(createEmployee(200));  // Getting to work
executeWork(createEmployee(1000)); // Getting to director tasks

// Test cases
console.log(teachClass('Math'));    // Output: Teaching Math
console.log(teachClass('History')); // Output: Teaching History
