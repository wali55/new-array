/*
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// horizontal sum
const result = matrix.map((row) => {
  return row.reduce((acc, curr) => acc + curr);
});

console.log(result);


const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

const result = matrix.reduce((acc, curr) => {
    console.log('acc', acc, 'curr', curr);
    return acc.map((value, index) => {
        console.log('curr[index]', curr[index], 'value', value);
        return curr[index] + value;
    });
});

console.log(result);
*/

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

const result = matrix.reduce((acc, curr) => {
    return acc + curr.reduce((acc, curr) => acc + curr);
}, 0);

console.log(result);