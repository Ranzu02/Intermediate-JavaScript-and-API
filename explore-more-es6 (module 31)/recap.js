/* 
* 1. Var let const
* 2. default parameter
* 3. template string
* 4. Arrow function
* 5. destructuring and spread operator
* 6. Object.keys, Object.values, Object.entries
* 7. for of used in array and string, for in loop used in object
*/

// Template string

const a = 56;
const numbers = [56,4,10,16];
const person = {name: 'Saymon Shuvro',
occupation: 'Student'
}

const message = `Hi, ${person.name} i know you are a good ${person.occupation} your age is: ${a} and your number is ${numbers[2]}`

console.log(message);

// Arrow function

const square =  x => x * x;
const sum = (a, b) => a + b;

// destructuring

const {name, ...others} = {name:'Avro', age:10, School:'Tikapara primary school'};
console.log(name);
console.log(others);

// Destructuring array

const [one, two, ...remaining] = [12, 52, 85, 46, 63, 37, 15];
console.log(one);
console.log(two);
console.log(remaining);