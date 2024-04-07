// Argument is an array like function

function sum(a,b,c){
    console.log(arguments);
    console.log(typeof arguments);
    const args = [...arguments];
    console.log(args);
    const result = a + b + c;
    return result;
}


const total = sum(35, 56, 87, 12, 19, 47);
console.log(total);

console.log(sum.length);