// Using single parameter with a first bracket
const add = (a) => a + 20;

const sum = add(9);
console.log(sum);

// We can use a single parameter without bracket
const add2 = number => number + 2;

const sum2 = add2(12);
console.log(sum2);

// big function using arrow, in this function we need to use return and second bracket


const add3 = (a, b, c) => {
    const d = 50;
    const e = a + b + c + d;
    return e;
}

const sum3 = add3(10,12,30);
console.log(sum3);