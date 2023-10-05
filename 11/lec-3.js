/*
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    console.log('equal');;
} else {
    console.log('not equal');
}
*/

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

const compare = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
} 
console.log(compare(arr1, arr2));
console.log(arr1 === arr1);