/* 
1. You have an odd array (array with odd numbers). [1,3,5,7,9].
now convert this array into an even array (array with even numbers).
 [2,4,6,8,10]. Do this using for loop and array.map() method.
 Hints: add one to any odd number and it will become an even number.
*/

const oddArray = [1, 3, 5, 7, 9]
const evenArray = [];

for (let i = 0; i < oddArray.length; i++){
    const newElement = oddArray[i] + 1;
    evenArray.push(newElement);

}

console.log(evenArray);

// Doing the same think with map loop.

const oddArray2 = [1, 3, 5, 7, 9];

const evenArray2 = oddArray2.map( i => i + 1);
console.log(evenArray2);