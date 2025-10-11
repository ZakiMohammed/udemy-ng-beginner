"use strict";
const studentName = 'John';
const age = 30;
const isStudent = true;
const hobbies = ['reading', 'coding', 'gaming'];
var Color;
(function (Color) {
    Color[Color["red"] = 1101] = "red";
    Color[Color["green"] = 1102] = "green";
    Color[Color["blue"] = 1103] = "blue";
})(Color || (Color = {}));
const myShift = 'morning';
console.log(studentName, age, isStudent, hobbies, Color.red, myShift);
class Car {
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }
}
const car = new Car('john_doe', 1121);
console.log(car);
