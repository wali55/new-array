/*
const s = Array.from('mohammad waliullah');
console.log(s);


const set = new Set(['car', 'cat', 'car', 'fire']);

const s = Array.from(set);

console.log(s);


const mapper = new Map([
    ['1', 'a'],
    ['2', 'b'],
]);

console.log(Array.from(mapper.keys()));
console.log(Array.from(mapper.values()));


function f() {
    return Array.from(arguments);
}

console.log(f(1, 2, 3));


const s = Array.from([1, 2, 3], (value) => value * value);
console.log(s);


console.log(Array.from({ length: 5 }, (v, i) => i));


const range = (start, stop, step) => {
    Array.from(
        { length: (stop - start) / step + 1 },
        (_, i) => start + i * step
    );
};

console.log(range(0, 4, 1));


console.log(Array.isArray([]));
console.log(Array.isArray(null));
*/

console.log(Array.of(7));
console.log(Array(7));