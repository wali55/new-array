/*
// compose function
const add10 = (n) => n + 10;
const times3 = (n) => n * 3;
const div2 = (n) => n / 2;

const result = div2(times3(add10(5)));

console.log(result);


// pipe function short way
const add10 = (n) => n + 10;
const times3 = (n) => n * 3;
const div2 = (n) => n / 2;
const n = 5;
const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), n);

const result = pipe(add10, times3, div2)(n);

console.log(result);
*/

// compose function long way
const add10 = (n) => n + 10;
const times3 = (n) => n * 3;
const div2 = (n) => n / 2;
const n = 5;

const compose = (...fns) => {
    return (x) => {
        return fns.reduce((v, f) => f(v), n);
    }
}

const result = compose(add10, times3, div2)(n);
console.log(result);