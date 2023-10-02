const words = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six'
];

const group = words.reduce((acc, curr) => {
    const len = curr.length;
    if(acc[len]) {
        acc[len].push(curr);
    } else {
        acc[len] = [curr];
    }
    return acc;
}, {})

console.log(group);