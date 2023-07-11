let arrayOfStudents = [
    { name: "yaseen", dob: 1998 },
    { name: "sajid", dob: 1999 },
  ];
  for (let i = 0; i < arrayOfStudents.length; i++) {
    var student = arrayOfStudents[i];
    var ages = 2023 - student.dob;
    student.age = ages;
  }
  console.log(arrayOfStudents);