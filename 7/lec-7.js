function myReduce(arr, cb, init) {
    let acc = init;
    let start = 0;
    if (!init) {
        acc = arr[0];
        start = 1;
    }
    for (let i = start; i < arr.length; i++) {
        acc = cb(acc, arr[i], i, arr);
    }
    return acc;
};

const arr = [1, 2, 3];

const result = myReduce(arr, (acc, curr) => acc + curr, 10);

console.log(result);