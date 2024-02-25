const numbers = [5, 6, 7, 9, 6, 1, 8];

const doubled = n => n * 2;

const doubledArray = numbers.map(doubled);
console.log(doubledArray);


const number2 = [8, 6, 4, 2, 3];

const result = number2.map(n=> n*2);
console.log(result);

const half = number2.map(n => n / 2);
console.log(half);

//Finding length of friends using map object.
const friends = ['shuvro', 'Avro', 'Saymon Shuvro', 'Avantika Avro'];

const lengthOfFriend = friends.map(friend => friend.length);
console.log(lengthOfFriend);

// finding first letter of each friends from an array.
const firstLeter = friends.map(friend =>friend[0]);
console.log(firstLeter);