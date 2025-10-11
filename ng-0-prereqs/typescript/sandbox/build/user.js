"use strict";
class Person {
    constructor(username, email) {
        this.name = username;
        this.email = email;
    }
    get UserName() {
        return this.name;
    }
    set Email(email) {
        this.email = email;
    }
}
const person = new Person('John Doe', 'john_doe@mail.com');
console.log(person);
person.Email = 'johndoe@mail.com';
console.log(person);
