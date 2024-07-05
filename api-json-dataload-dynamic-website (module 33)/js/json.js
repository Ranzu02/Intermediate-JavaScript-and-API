const user = {id:1, name:'Saymon Shuvro', job: 'actor'};
console.log(user);

// To convert to JSON use JSON.stringify
const userJSON = JSON.stringify(user);
console.log(userJSON);

// To convert a JSON string to Js object use JSON.perse

const userJS = JSON.parse(userJSON);
console.log(userJS);