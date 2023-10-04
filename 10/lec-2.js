const arr = ['a', 'b', 'c'];

const arrIterator = arr[Symbol.iterator]();

console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());