const products = [
    {id:1, name:'lenovo', price:65000},
    {id:2, name:'Del', price:45000},
    {id:3, name:'Hp', price:55000},
    {id:4, name:'macbook', price:150000},
];

// using map
const name = products.map(product => product.name);
console.log(name);

// using foreach

const ids = products.forEach(product => console.log(product.id));

// using filter

const highPrice= products.filter(product => product.price >55000);
console.log(highPrice);

// using find

const findHighPriceFristOne = products.find(product => product.price >55000);
console.log(findHighPriceFristOne);

// using reduce

const totalPrice = products.reduce((accumolator, current) => accumolator + current.price, 0 );
console.log(totalPrice);