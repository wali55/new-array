const arr = [1, 2, 3, 4];

function reduce(accumulator, currentValue, index) {
    console.log(`index: ${index}, accumulator: ${accumulator}, currentValue: ${currentValue}`);
    return accumulator + currentValue;
}

const sum = arr.reduce(reduce, 0);

console.log(sum);