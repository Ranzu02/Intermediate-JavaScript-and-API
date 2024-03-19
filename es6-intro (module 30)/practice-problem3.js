/* 
Write an arrow function where it will do the following: x2

a) Square Each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared element
*/

const average = (array) => {
    let sum = 0;
    let average2 = 0;
    for (const items of array){
        const square = items*items;
        // console.log(square);
        sum = sum + square;
        // console.log(sum);
        average2 = sum / array.length;
        // console.log(average2);

}
// console.log(sum);
return average2;
}

const numbers = [50, 48, 1475, 8];
const averageFinal = average(numbers);
console.log(averageFinal);