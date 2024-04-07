// In closure if we return a function inside a function it can use it's parent
// Function's varibales.

function stopWatch(){
    let counter = 0;

    return function(){
        counter++;
        return counter;
    }
}

const watch1 =  stopWatch();
console.log(watch1());
console.log(watch1());
console.log(watch1());
console.log(watch1());
console.log(watch1());

const watch2 =  stopWatch();

console.log(watch2());
console.log(watch1());