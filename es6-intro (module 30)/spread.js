const max = Math.max(15, 25, 65, 78, 100, 52);
console.log(max);

const numbers = [15, 24, 65, 85, 45, 65];
const maxArray = Math.max(...numbers);  // spread operator separates array values
console.log(maxArray);

// Copy arrays using spread operator

const friends = [45, 85, 86, 32, 47];
const bondhu = friends;

bondhu.push(15);
console.log(friends);
console.log(bondhu);

// The problem above is: we are pushing in bondhu but the number is adding to both the array. To solve this problem we will use spread operator to copy


const dosto = [...friends];
dosto.push(200);
console.log(dosto);


// Advanced: adding more arrays by using comma

const moreFriends = [...friends, 99, 300];
console.log(moreFriends);