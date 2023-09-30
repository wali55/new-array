const students = [
    {
        id: 1,
        name: 'wali',
        gpa: 2.1,
        mail: 'wali@mail.com',
        due: true, 
        dueAmount: 25000,
    },
    {
        id: 2,
        name: 'hasib',
        gpa: 3.2,
        mail: 'hasib@mail.com',
        due: false, 
        dueAmount: 0,
    },
    {
        id: 3,
        name: 'sakib',
        gpa: 3.1,
        mail: 'sakib@mail.com',
        due: true, 
        dueAmount: 15000,
    },
];

const dueTuition = students.filter((student) => student.due === true);

/*
dueTuition.map((student) => console.log(`Hello, ${student.name}. Your tuition is still due. Your due amount is ${student.dueAmount}. Please pay the fee before the final exam. Thank you.`));

console.log(lowGpa);
*/

const lowGpa = students.filter((student) => student.gpa < 3);

lowGpa.map((student) => console.log(`${student.name}, your gpa is low. Please try to do better next time. All the best.`));




