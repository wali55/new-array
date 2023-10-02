/*
function createPromise(id) {
    const randomTime = Math.floor(Math.random() * 2000 + 100);
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`processing ${id} time ${randomTime}`);
            resolve(id);
        }, randomTime);
    });
}

const ids = [1, 2, 3, 4, 5];

ids.forEach((value) => createPromise(value));
*/

// Promise chain
function createPromise(id) {
    const randomTime = Math.floor(Math.random() * 2000 + 100);
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`processing ${id} time ${randomTime}`);
            resolve(id);
        }, randomTime);
    });
}

const ids = [1, 2, 3, 4, 5];

const result = ids.reduce((acc, curr) => {
    return acc.then(() => createPromise(curr));
}, Promise.resolve());

result.then(() => console.log('done'));