const student = {
    name: "Saymon Shuvro",
    class: "12th",
    roll: 1,
    isGood: true
}

//Get all the keys in an array
const studentKeys = Object.keys(student);
console.log(studentKeys);

//Get the values in a array
const values =Object.values(student);
console.log(values);

//Get keys and values as arrays of array
const entries = Object.entries(student);
console.log(entries);


// Delete a key and values
delete student.name;
console.log(student);


//Another way to delete

const {roll, ...restStudent} = student;
console.log(restStudent);


//Freezing an object. This will allow to only read the object
// Object.freeze(student);
// Object.seal(student);

delete student.roll;  //Can't delete now, because the object is freeze now
console.log(student);

student.parent = 'Kamrul Hasan'; //Adding new keys and values will work when there is no freeze or seal
console.log(student);

//Sealing an object. This will allow to update a keys value but not remove or add anything.
student.roll = 3;
console.log(student);