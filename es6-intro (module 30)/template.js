const firstName = "Kamrul";
const lastName = "Hasan";
const age = 37;
const firstMark = 65;
const secondMark = 50;


const nameAge = firstName + " " + lastName + " " + "age is: " + age + " And his total mark is: " + (firstMark + secondMark);
console.log(nameAge);

// ES6 Version (Using backtick)

const nameAgeES6 = `${firstName} ${lastName}
and his age is: ${age} and his total mark is: ${firstMark + secondMark}`;
console.log(nameAgeES6);

// Another example

const newsLetter = "Hi Shuvro \nI hope you are doing well. \nHow is avro?";
console.log(newsLetter);

// using ES6

const newsLetterES6 = `Hi Shuvro
I hope you are doing well.
How is Avro?`;

console.log(newsLetterES6);


// Using array and object in a string is also easy

const student = {name:"Shuvro", subject:"Math", marks:85};
const numbers = [15,20,14,28,35,75,49,27];
const takingArrayValue = `In this example we will use array element on the template string ${numbers[2]} and his name is ${student.name}`;
console.log(takingArrayValue);
