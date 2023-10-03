

// const result = students.find((item) => item.name === 'ali');

// result.name = 'ali bhai';

// console.log(students);

const students = [
    { id: 2, name: 'wali' },
    { id: 1, name: 'hasib' },
    { id: 4, name: 'sakib' },
    { id: 3, name: 'ali' },
];

const findMethod = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            return arr[i];
        }
    }
    return undefined;
}

console.log(findMethod(students, (item) => item.name === 'hasib'));