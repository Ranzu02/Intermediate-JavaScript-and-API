// map ==> loops through each element of the array and do the operation that
// you passed in the call back function and hold the result frome each
// operations in an array and finally returns you the array.

const numbers = [12, 98, 5, 7, 9, 4, 3];


function doubleIt(num){
    return num * 2;
}

const result = numbers.map(doubleIt)
console.log(result);

// const doubled = [];
// for(const num of numbers){
//     const double = num * 2;
//     doubled.push(double);
// }

// console.log(doubled);

const double2 = n => n * 2;
const result2 = numbers.map(double2);
console.log(result2);

const result3 = numbers.map(n=>n*2);
console.log(result3);