// 1) Write an arrow function that will take 3 parameters, will multiply the parameters
// and will return the result.

const multiplication = (a, b, c) => a*b*c;
const result = multiplication(10,20,15);
console.log(result);



/* 
2) Write the following sentence in three lines and print result:
I am a web developer. I love to code. I love to eat biryani.
*/

const string =  "I am a web developer. I love to code. I love to eat biryani.";
// const separated = string.split(/[.?]/); // Using multiple delimeters
const separated = string.split(". ");
// console.log(separated);
for ( let i = 0; i < separated.length-1; i++){
    const eachString = separated[i];
    
    const eachStringTrimmed = eachString.trim();
    const finalString = eachStringTrimmed + ".";
    console.log(finalString);
}

console.log(separated[separated.length-1]);


/* 
3) Write an arrow function that will take 2 parameters: One parameter will come
from you and the ohter parameter will be a default parameter. Add these
two parameters and return the result.
 */

const addition = (a, b = 7) => a + b;

const finalAddition = addition(10);
console.log(finalAddition);

