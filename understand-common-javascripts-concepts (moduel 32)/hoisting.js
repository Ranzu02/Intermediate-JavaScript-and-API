print5();
// print10();

for (var i = 0; i < 5; i++){
    console.log(i);
}

console.log('outside', i);


function print5(){
   console.log('inside print5', 5); 
}

var print10 = function(){
    console.log('Inside print10', 10);
}

print10();