/*
const arr = [
    [1, 2],
    [3, 4],
    [5, 6]
];

const result = arr.reduceRight((acc, curr) => acc.concat(curr), []);

console.log(result);
*/

const num = [1, 2, 3];

const result = num.reduceRight((acc, curr) => {
    console.log(`acc ${acc} curr ${curr}`);
    return acc + curr;
}, 0);

console.log(`sum ${result}`);