/*
let nestedArray = [[1, 2], 3, [4, 5]];

const flatArray = nestedArray.flat();

console.log(flatArray);
*/

let nestedArray = [[1, 2], 3, [4, 5]];

const flatArray = nestedArray.reduce((acc, curr) => {
    return acc.concat(curr);
}, []);

console.log(flatArray);