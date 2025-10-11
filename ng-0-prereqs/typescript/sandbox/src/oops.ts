class Person {
  private name: string;
  private email: string;

  constructor(username: string, email: string) {
    this.name = username;
    this.email = email;
  }

  public get UserName(): string {
    return this.name;
  }

  public set Email(email: string) {
    this.email = email;
  }
}

const person: Person = new Person('John Doe', 'john_doe@mail.com');

console.log(person);

person.Email = 'johndoe@mail.com';

console.log(person);

class Employee extends Person {
  private employeeId: number;

  constructor(username: string, email: string, employeeId: number) {
    super(username, email);
    this.employeeId = employeeId;
  }

  public get EmployeeId(): number {
    return this.employeeId;
  }
}

const employee: Employee = new Employee('Allen Green', 'allen@mail.com', 1121);

console.log(employee);

interface IPilot {
  flyPlane(): void;
}

class Pilot extends Employee implements IPilot {
  constructor(username: string, email: string, employeeId: number) {
    super(username, email, employeeId);
  }

  flyPlane(): void {
    console.log('Flying a plane...');
  }
}

const pilot: Pilot = new Pilot('Smith Woods', 'smith@mail.com', 1122);

console.log(pilot);

pilot.flyPlane();