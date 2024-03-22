/* 
2. You are given an array say: [33, 50, 79, 78, 30, 101, 30]. Now return/get
all the elements which are divisibale by 10 using array.filter() method.

Now do the same task of question 2. But do this using array.find() method. Then
compare the output of question 2 & question 3.

*/

const givenArray = [33, 50, 79, 78, 101, 30];

const divisible = givenArray.filter( n => n % 10 == 0);
console.log(divisible);

// array.find()
const divisible2 = givenArray.find( n => n % 10 == 0);
console.log(divisible2);