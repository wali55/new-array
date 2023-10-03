/*
const arr = [1, 3, 22, 11, 54, 67];

bubbleSort(arr, (a, b) => a - b);

bubbleSort(students, (a, b) => a.id - b.id);
*/

const students = [
    { id: 2, name: 'wali' },
    { id: 1, name: 'hasib' },
    { id: 4, name: 'sakib' },
    { id: 3, name: 'ali' },
];

const bubbleSort = (arr, cb) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (cb(arr[j], arr[j + 1]) > 0) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
} 

bubbleSort(students, (a, b) => (a.name).localeCompare(b.name));

console.log(students);