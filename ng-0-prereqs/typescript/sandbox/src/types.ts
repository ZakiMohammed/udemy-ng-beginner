const studentName: string = 'John';
const age: number = 30;
const isStudent: boolean = true;
const hobbies: string[] = ['reading', 'coding', 'gaming'];

enum Color {
  red = 1101,
  green = 1102,
  blue = 1103,
}

type Shift = 'morning' | 'evening' | 'night';

const myShift: Shift = 'morning';

console.log(studentName, age, isStudent, hobbies, Color.red, myShift);

class Car {
  name: string;
  model: number;

  constructor(name: string, model: number) {
    this.name = name;
    this.model = model;
  }
}

const car: Car = new Car('john_doe', 1121);

console.log(car);

interface Product {
  name: string;
  price: number;
}

const product: Product = {
  name: 'Laptop',
  price: 1000,
};

console.log(product);