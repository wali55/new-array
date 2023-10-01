/*
const arr = [1, 2, 3, 4];

function reduce(accumulator, currentValue) {
    return accumulator + currentValue;
}

const sum = arr.reduce(reduce);

console.log(sum);
*/

const arr = [1, 2, 3, 4];

const avg = arr.reduce((acc, curr, index, arr) => {
    acc += curr;
    if (index === arr.length - 1) {
        return acc / arr.length;
    } else {
        return acc;
    }
});

console.log(avg);