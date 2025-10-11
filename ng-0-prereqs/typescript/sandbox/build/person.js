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
class Employee extends Person {
    constructor(username, email, employeeId) {
        super(username, email);
        this.employeeId = employeeId;
    }
    get EmployeeId() {
        return this.employeeId;
    }
}
const employee = new Employee('Allen Green', 'allen@mail.com', 1121);
console.log(employee);
class Pilot extends Employee {
    constructor(username, email, employeeId) {
        super(username, email, employeeId);
    }
    flyPlane() {
        console.log('Flying a plane...');
    }
}
const pilot = new Pilot('Smith Woods', 'smith@mail.com', 1122);
console.log(pilot);
pilot.flyPlane();
