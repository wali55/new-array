/*
const arr = [1, 2, 3];

const copyArray = (arr) => {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(arr[i]);
    }
    return newArray;
};

const result = copyArray(arr);

result.push(4);

console.log(arr);
console.log(result);


const arr = [1, 2, 3];
const newArray = arr;

newArray.push(4);

console.log(arr, newArray);


// using spread operator
const arr = [1, 2, 3];
const newArray = [...arr];

newArray.push(4);

console.log(arr, newArray);


// shallow copy nested array is olny the reference
const arr = [[1, 2], [3, 4]];
const newArr = [...arr];
newArr[0].push(3);

console.log(arr, newArr);


const arr = [1, 2, 3];
const newArr = arr.map((item) => item);
newArr.push(4);
console.log(arr, newArr);

const arr = [1, 2, 3];
const newArr = arr.filter((item) => item);
newArr.push(4);
console.log(arr, newArr);


const arr = [1, 2, 3];
const newArr = arr.slice();
newArr.push(4);
console.log(arr, newArr);


const arr = [1, 2, 3];
const newArr = arr.concat();
newArr.push(4);
console.log(arr, newArr);


const arr = [1, 2, 3];
const newArr = Array.from(arr);
newArr.push(4);
console.log(arr, newArr);
*/

// deep copy using JSON API
const arr = [[1, 2], [3, 4]];
const newArr = JSON.parse(JSON.stringify(arr));
newArr[0].push(3);

console.log(arr, newArr);