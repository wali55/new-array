const courses = [
    {
        id: 'C1',
        name: 'js',
        price: 1234,
    },
    {
        id: 'C2',
        name: 'node',
        price: 4234,
    },
    {
        id: 'C3',
        name: 'react',
        price: 3234,
    },
];

const discountedPrice = {
    C1: 1000,
    C2: 2000,
};

const updatedCourse = courses.reduce((acc, curr) => {
    if(discountedPrice[curr.id]) {
        curr.discountedPrice = discountedPrice[curr.id];
    } else {
        curr.discountedPrice = 0;
    }
    acc.push(curr);
    return acc;
}, []);

console.log(updatedCourse);