/*
const arr = [1, 3, 22, 11, 54, 67];

const linearSearch = (arr, key) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch(arr, 110));;
*/
const students = [
    { id: 2, name: 'wali' },
    { id: 1, name: 'hasib' },
    { id: 4, name: 'sakib' },
    { id: 3, name: 'ali' },
];

const linearSearch = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            return i;
        }
    }
    return -1;
}

const result = linearSearch(students, (student) => student.id === 1)

console.log(result);