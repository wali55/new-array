const arr = ['a', 'b', 'c'];

const keys = arr.keys();
const values = arr.values();
const entries = arr.entries();

const loop = (iterator, name) => {
    for (let value of iterator) {
        console.log(`${name} - ${value}`);
    }
}

loop(keys, 'keys');
loop(values, 'values');
loop(entries, 'entries');