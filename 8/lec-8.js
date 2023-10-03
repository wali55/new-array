const arr = [1, 3, 22, 11, 54, 67];

const students = [
    { id: 2, name: 'wali' },
    { id: 1, name: 'hasib' },
    { id: 4, name: 'sakib' },
    { id: 3, name: 'ali' },
];

const binarySearch = (arr, cb) => {
    let lowest = 0;
    let highest = arr.length - 1;

    while (lowest <= highest) {
        let mid = Math.floor((lowest + highest) / 2);
        // if (arr[mid] === key) return mid;
        // if (arr[mid] < key) {
        //     lowest = mid + 1;
        // }
        // if (arr[mid] > key) {
        //     highest = mid - 1;
        // }
        cb(arr[mid]);
    }
    return -1;
}

students.sort((a, b) => (a.name).localeCompare(b.name));

const result = binarySearch(arr, (value) => {
    if (value.id === 3) return value;
    if (value.id < 3) {
        
    }
})

console.log(binarySearch(arr, 22));