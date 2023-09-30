const students = [
  {
    id: 1,
    name: "wali",
    gpa: 2.1,
    mail: "wali@mail.com",
    due: true,
    dueAmount: 25000,
  },
  {
    id: 2,
    name: "hasib",
    gpa: 3.2,
    mail: "hasib@mail.com",
    due: false,
    dueAmount: 0,
  },
  {
    id: 3,
    name: "sakib",
    gpa: 2.5,
    mail: "sakib@mail.com",
    due: true,
    dueAmount: 15000,
  },
];

const emailTemplate = students
  .filter((student) => student.gpa < 3)
  .map((student) => {
    return {
      ...student,
      title: `${student.name} your gpa is low. You got only ${student.gpa}`,
      msg: "Please try to do better",
    };
  });

console.log(emailTemplate);
