const numbers = [12, 54, 8, 6, 4, 3, 8, 71, 65];

const total = numbers.reduce((previous, current) => previous + current, 0);

console.log(total);