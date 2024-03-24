/* 
Strongly typed language uses data types in the variable declaration
Examples:
int a = 5;
string = "Saymon Shuvro";
bool c = True;
object student = {name: 'Avantika Avro', id: 03};
int[] numbers = [12,5,48,7,5,8];
string[] friends = ["Shuvro", "Avro"];


Dynamic typed Language like JavaScript doesn't use types in the variable declaration.
JS use var, const, let

*/
// Primitive type
const a = 5;
const b = "Avantika Avro";
const types =  true;

// Non Primitive
const ages = [12,10,13,18,16];
const student = {name:"Saymon Shuvro", class:"Three", id: 58746};

console.log(typeof a, typeof b, typeof types, typeof ages, typeof student);
console.log(Array.isArray(ages));

let x = 5;
let y = x;
console.log(x,y);
y = 7;
console.log(x, y);

let p = {job: 'Web developer'};
let q = p;
// q.job = "Software engineer"; If we edit the non primitive it will edit original ones too.
q = {job: "Backend developer"};
console.log( p, q);
