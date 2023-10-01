/*
const arr = [1, 2, 3, 4, 5];

const mapArr = arr.flatMap((value) => [value, value * 2]);

console.log(mapArr);
*/

const arr = [1, 2, 3, 4, 5];

const reducedFlatMap = arr.reduce((acc, curr) => {
    return acc.concat([curr, curr * 2]);
}, []);

console.log(reducedFlatMap);