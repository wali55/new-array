/*
const arr = [1, 2, 3];
console.log(arr.constructor.prototype);
console.log(Array.prototype);
console.log(Object.getOwnPropertyNames(Array.prototype));


const arr = [1, 2, 3];
Array.prototype.log = function() {
    console.log(this.join(' | '));
}

arr.log();
*/

// adding new method in the prototype
const arr = [1, 2, 3];
Array.prototype.loop = function(cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i], i, this);
    }
}

arr.loop((value) => console.log(value));