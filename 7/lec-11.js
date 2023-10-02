/*
const arr = [1, 2, 3, 4];

const result = arr.reduce((acc, curr) => {
    const square = curr * curr;
    acc.push(square);
    return acc;
}, []);

console.log(result);


const arr = [1, 2, 3, 4, 5];

const odd = arr.reduce((acc, curr) => {
    if (curr % 2 !== 0) {
        acc.push(curr);
    }
    return acc;
}, []);

console.log(odd);


const arr = [];

for (let i = 0; i < 5000000; i++) {
    arr.push(i);
}

console.time('both');
arr.filter((value) => value % 2 === 1).map((value) => value * 2);
console.timeEnd('both');
*/

const arr = [];

for (let i = 0; i < 5000000; i++) {
    arr.push(i);
}

console.time('both');
arr.reduce((acc, curr) => {
    if (curr % 2 === 1) {
        acc.push(curr * 2);
    }
    return acc;
}, []);
console.timeEnd('both');