const numbers = [14,52,84,8,79,5,4,852,4];
const players = [75,65,67,72,55,59];

const friends = ['shuvro', 'Avro', 'Saymon Shuvro', 'Avantika Avro'];

const selectedNumbers = numbers.find(n => n> 50);
console.log(selectedNumbers);

const frinedsFinder = friends.find(friend => friend.length > 6);
console.log(frinedsFinder);

// find check all the elements on the array but returns only the first element it finds. If it doesn't find anything then it will return undefind.


// We have learned from the module so far 
/* 
1. map
2. foreach
3. filter
4. find
*/