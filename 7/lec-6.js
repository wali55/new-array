const votes = [
    'java',
    'java',
    'javascript',
    'python',
    'java',
    'python',
];

const result = votes.reduce((acc, curr) => {
    if (acc[curr]) {
        acc[curr]++;
    } else {
        acc[curr] = 1;
    }
    return acc;
}, {});

console.log(result);