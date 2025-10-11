// destructuring arrays

const wizard = ['Harry', 'Potter']

// console.log(wizard[0], wizard[1])  // Harry Potter

const [firstName, lastName] = wizard

console.log(firstName, lastName)    // Harry Potter

// destructuring objects

const person = { id: 1, name: 'John Doe', age: 21 }

// console.log(person.name);

const { name } = person

console.log(name)   // John Doe