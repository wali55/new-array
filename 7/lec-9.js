/*
const products = [
    { name: 'JS Cookbook', price: 1200 },
    { name: 'JS Cookbook', price: 1200 },
    { name: 'Java Dev', price: 1500 },
    { name: 'Python Guru', price: 900 },
    { name: 'Java Dev', price: 1500 },
    { name: 'JS Cookbook', price: 1200 },
];

const invoice = products.reduce((acc, curr) => {
    if (acc[curr.name]) {
        acc[curr.name].quantity++;
        acc[curr.name].price += curr.price;
    } else {
        acc[curr.name] = {
            price: curr.price,
            quantity: 1
        };
    }
    return acc;
}, {});

console.log(invoice);
*/

const arr = [1, 2, 3];

const result = arr.reduce((acc, curr) => acc + curr);

console.log(result);