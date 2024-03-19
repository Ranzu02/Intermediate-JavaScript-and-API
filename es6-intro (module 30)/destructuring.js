const student = {name: "Kamrul hasan", sreni: 12, age:24};

// const {name, sreni, age} = student;
// console.log(name, sreni, age);

const {name, age: boyos}= student; //Destructuring object property value

console.log(name, boyos);



//Array destructuring

const number = [12,66,78];
const [a, b] = number;

console.log(a, b);

// function (advance)

function doubleThem(a,b){
    return [a*2, b*2];
}

const [prothom, ditiyo] = doubleThem(5,9);

console.log(prothom, ditiyo);