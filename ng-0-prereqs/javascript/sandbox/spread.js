// arrays, objects, strings, function arguments

// concat arrays

const arr1 = [10, 20]
const arr2 = [30, 40]

const arr3 = [...arr1, ...arr2]

console.log(arr3)

// cloning arrays

const arr4 = [10, 20]
const arr5 = [...arr4]

console.log(arr4 === arr5)