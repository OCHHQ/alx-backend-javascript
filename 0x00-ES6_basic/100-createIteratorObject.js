export default function createIteratorObject(report) {
  const employees = report.allEmployees;
  const departments = Object.keys(employees);
  // Create a generator function to yield each employee
  function* employeeGenerator() {
    for (const department of departments) {
      for (const employee of employees[department]) {
        yield employee;
      }
    }
  }

  // Return an iterator from the generator function
  return employeeGenerator();
}
