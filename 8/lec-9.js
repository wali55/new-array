const arr = [1, 3, 22, 11, 54, 67];

const students = [
    { id: 2, name: 'wali' },
    { id: 1, name: 'hasib' },
    { id: 4, name: 'sakib' },
    { id: 3, name: 'ali' },
];

const result1 = arr.findIndex((item) => item === 22);
const result2 = students.findIndex((item) => item.name === 'ali');

console.log('result1', result1,'result2', result2);