/* 
Write an arrow function where it will do the following:
 a) It will take and array where the array elements will be the name of your friends.
 b) Check if the length of each element is even, push elements with
 even length to a new array and return the reslut. 

 Then print the result.
*/

const friendsName = (friends) => {
    const newList = [];
for (const name of friends){
    const friendsNameLength = name.length;
    
    if (friendsNameLength % 2 == 0){
        newList.push(name);
    };
    
}
return newList;
}

const friendsNames = ['Shuvro', 'Avro', 'Saymon Shuvro', 'Avantika Avro', 'Ranzu', 'Joly'];

const finalList = friendsName(friendsNames);

console.log(finalList);