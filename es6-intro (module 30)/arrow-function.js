// Function declaration

// function myFunction(a, b){
//     const sum = a + b;
//     return sum;
// }
function myFunction(a, b){
    return a + b;
}

const total = myFunction(7,5);
console.log(total);


// function expression 
const sum2 = function(a,b){
    return a + b;
}


// ES6 Arrow Function

const sum3 = (a,b) => {return a + b}; //If we use return we will have to use 2nd bracket

const sum4 = (a,b) => a + b;

const add = sum4(85, 5);
console.log(add);
