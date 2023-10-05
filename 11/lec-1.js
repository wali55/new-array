/*
const arr = [1, 2, 3];

console.log('typeof arr:', typeof arr);
console.log('arr.constructor:', arr.constructor);
console.log('arr.constructor.prototype:', arr.constructor.prototype);


const arr = [1, 2, 3];
arr.test = 'Test Property';
arr.log = function() {
    console.log(this);
    console.log(this.test);
    console.log(this.length);
    console.log(this[0]);
}

arr.log();


// distinguish between array and object
const arr = [1, 2, 3];
const obj = {};
console.log(arr instanceof Array);
console.log(obj instanceof Array);
console.log(Array.isArray(arr));
*/
const arr = [1, 2, 3];
console.log(Object.prototype.toString.call(arr));
