export default function updateStudentGradeByCity(students, city, newGrades) {
  // here i aam filtering by City
  const studentsinCity = students.filter((student) => student.location === city);

  return studentsinCity.map((student) => {
    const studentGrade = newGrades.find((grade) => grade.studentId === student.id);

    return {
      ...student, // here i am spreedin the student property (id FirstName, location)
      grade: studentGrade ? studentGrade.grade : 'N/A',
    };
  });
}
