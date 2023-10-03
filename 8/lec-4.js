/*
// ascending order sort 
const arr = [1, 3, 22, 11, 54, 67];

arr.sort((a, b) => a - b);

console.log(arr);


// ascending order sort 
const arr = [1, 3, 22, 11, 54, 67];

arr.sort((a, b) => b - a);

console.log(arr);
str.sort((a, b) => a.localeCompare(b));



// string sort
const str = ['Cat', 'camel', 'Ant', 'anaconda', 'bat', 'ant'];
str.sort((a, b) => {
    a = a.toLocaleLowerCase();
    b = b.toLocaleLowerCase();
    if (a > b) return 1;
    if (b > a) return -1;
    return 0;
});

console.log(str);


const students = [
    { id: 2, name: 'wali' },
    { id: 1, name: 'hasib' },
    { id: 4, name: 'sakib' },
    { id: 3, name: 'ali' },
];

students.sort((a, b) => a.id - b.id);
console.log(s);
*/

const students = [
    { id: 2, name: 'wali' },
    { id: 1, name: 'hasib' },
    { id: 4, name: 'sakib' },
    { id: 3, name: 'ali' },
];

students.sort((a, b) => (a.name).localeCompare(b.name));
console.log(students);