/* 
8 ways to get undefined

1. Variable that is not initialized will give undefined
2. function with no return
3. Parameter that is not passed will get undefined
4. if return has nothing on the right side will return undefined.
5. property that doesn't exists on an object will give you undefined.
6. accessing array elements outside of the index range.
7. deleting an element inside an array
8. set a value directly to undefined.
*/

// 1
let a;
console.log(a);

// 2
function ranzu(){
    const a = 5;
    const b = 5;
    const c = a + b;
    // return c;
}

const total = ranzu();
console.log(total);

// 3
function third(a, b, c, d){
    const total = a + b + c + d;
    console.log(a, b, c, d)
}

third(2,5);

// 4

function noNegative(a,b){
    if(a < 0 || b < 0){
        return;
    }
    return a + b;
}

const total4 = noNegative(2,-5);
console.log(total4);

// 5

const student = {name:'Saymond shuvro', age:10};
console.log(student.class);

// 6
const ages = [12, 54, 84, 34, 35, 36, 25, 48, 52];
console.log(ages[20]);

// 7
// You should not do delete, instead use splice.
delete ages[1]; 
console.log(ages[1], ages[5], ages[9]);
console.log(ages);

// 8

let eighth = undefined;
const ninth = null;

eighth = 7;

console.log(eighth, ninth);


// another things

console.log(typeof null);
console.log(typeof undefined);