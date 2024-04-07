// Passby value doesn't change the original value on primitive data
// pirmitive types are pass by value


const number1 = 5;
const number2 = 7;

function multiply(a, b){
    a = 7;
    const result = a * b;
    return result;
}
console.log(number1);
const multiplication = multiply(number1, number2);
console.log(multiplication);
console.log(number1);


// Non primitives are pass by reference 


const pair1 = {hero: "Ananto", heroine: "Barsha"};
const pair2 = {hero: "Shakib Khan", heroine: "Apu Bishwas"};

function movie(pair) {
    pair.hero = "Jolil";
}

console.log(pair1);
movie(pair1);
console.log(pair1);




let a = 1;
let b = a;

a = 2;
console.log(a, b);

console.log(a, b);
