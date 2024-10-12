// Teacher class definition
class Teacher {
  firstName: string;
  lastName: string;
  location: string;
  fullTimeEmployee: boolean;

  constructor(firstName: string, lastName: string, location: string, fullTimeEmployee: boolean) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.location = location;
    this.fullTimeEmployee = fullTimeEmployee;
  }
}

// Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

//dircector oject
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

//3. Printing teachers
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
// implementing the printTeaccherFunction
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};
console.log(printTeacher("john", "Doe"));
//Define the interface for StudentClass 
interface StudentClassConstructor {
  new (firstName: string,lastName: string): StudentClass;

}

interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

//implementation
class Student implements StudentClass {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently Working";
  }

  displayName(): string {
    return this.firstName;
  }
}
const Student1: StudentClass = new Student("jane","Doe");
console.log(Student1.workOnHomework());
console.log(Student1.displayName());
