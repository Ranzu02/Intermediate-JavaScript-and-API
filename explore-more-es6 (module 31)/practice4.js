/* 
4. 
const people = [
    {name: 'Meena', age:20},
    {name:'Rina', age: 15},
    {name:'Suchorita', age: 22}

];

Follow the above arry of objects. So, you have 3 objects as array element. Can you find
the total sum from here?
20 + 15 + 22 =57. Then output will be 57

What are you thinking? yeah! do it with for loop. I know you can do it.
But! Wait !! Wait !!! Do the same task using array.reduce() method.
*/

const people = [
    {name: 'Meena', age:20},
    {name: 'Rina', age:15},
    {name: 'Suchorita', age:22}
];

let total = 0;
for ( let i = 0; i <people.length; i ++){
    const peopleAge = people[i].age;
    total = total + peopleAge;
}

console.log(total);


// doing the same this 
const total2 = people.reduce((accumulator, currentvalue) => accumulator + currentvalue.age, 0);
console.log(total2);



const nums1 = [1, 2, 3, 4, 5];
let output1 = nums1.filter(n=> n%2 !== 0);
console.log(output1);

const nums2 = [1, 2, 3, 4, 5];
let output2 = nums2.filter(n=> n%2);
console.log(output2);

/* Both the code is giving same result because in JS a value that is not 0 defines boolean true */