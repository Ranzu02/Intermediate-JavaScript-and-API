/* 
Truthy:
1. true
2. Any number (+ve or -ve) except 0;
3. Any string other than empty string, even if it's a blank space.
4. "0", "false"
5. Empty object is truthy. If it has value then definitely truthy.
6. Empty array is truthy. If it has value then definitely truthy.


Falsy:
1. false
2. the number 0
3. empty string
4. undefined
5. null

*/

const x = " ";
if(x){
    console.log("Value of x is truthy");
}
else{
    console.log('Value of x is falsy');
}


// Checking falsy
const y = ' ';
if (!y){
    console.log("The value of Y is falsy");
}

const z = true;
if(!!z){
    console.log("The value of Z is truthy");
}