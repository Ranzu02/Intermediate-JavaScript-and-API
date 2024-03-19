const numbers = [1,6,8,78,52,6,5];

const double = numbers.forEach(n => console.log(n));

const double2 = numbers.forEach(n => n * 2);
console.log(double2); // Results undefined because for each doesn't return anything. 