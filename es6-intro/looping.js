// for of loop works in string and array
// for in loop works with object

const numbers = [12, 45, 87, 65, 4, 8, 7];

for (const num of numbers){
    console.log(num);
}

const texts = "Hello World, we are nothing but star dusts."

for (const text of texts){
    console.log(text);
}

// Using for in on a object
const student = {
    name: "Saymon Shuvro",
    age: 9,
    class: 4,
    loves: 'games'

}

for (const key in student){
    // console.log(key);
    const value = student[key];
    // console.log(key, value);
    console.log(key, value);
}

// Using for of in object {special way}
const student2 = {
    name: "Saymon Shuvro",
    age: 9,
    class: 4,
    loves: 'games'

}

const keys = Object.keys(student2);

for(const key of keys){
    const value2 = student2[key];
    console.log(key, value2);
}