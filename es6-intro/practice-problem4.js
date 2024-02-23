const maximum = (array1, array2) => {
    const newArray = [...array1, ...array2];
    const maxNumber = Math.max(...newArray);
    // console.log(maxNumber);
    // console.log(newArray);
    return maxNumber;
}




const array1 = [75, 85, 62, 34, 87, 100, 625, 862, 478];
const array2 = [83, 954, 12, 74, 65, 83, 97, 18, 17, 64];

const result = maximum(array1, array2);
console.log(result);