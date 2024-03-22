/* 
3. You have an array of objects:
const instructor = [
    {name:"Nodi", age: 28, position:"Senior"},
    {name:"Akil", age: 26, position:"Junior"},
    {name:"Sabuj", age: 30, position:"Senior"}
]

Your task is to display the instructor names that has the position senior using
filter.


*/

const instructor = [
    {name:'Nodi', age: 28, position:'Senior'},
    {name:'Akil', age: 26, position:'Junior'},
    {name:'Sabuj', age: 30, position:'Senior'}
];

const findSeniorInstructor = instructor.filter( n => n.position === 'Senior');
console.log(findSeniorInstructor);

const name1 = findSeniorInstructor[0].name;
const name2 = findSeniorInstructor[1].name;

console.log(name1, "and", name2);