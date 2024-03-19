// filter selects elements based on a condition and returns an array that fullfilled the condition. 

const numbers = [14,52,84,8,79,5,4,852,4];
const players = [75,65,67,72,55,59];

const selected = numbers.filter(n => n > 50);
console.log(selected);

const friends = ['shuvro', 'Avro', 'Saymon Shuvro', 'Avantika Avro'];

const friends5Characters = friends.filter(friend => friend.length>4);
console.log(friends5Characters);

