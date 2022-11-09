import { IsOnline, Gamer } from './interfaces'


//* no constuctors
class Employee implements IsOnline {
  IsOnline(): Gamer {
    return { name: this.name, id: this.id, address: address, email: this.email }
  }

  id!: number;
  name!: string;
  address!: string;
  email!: string;
}

let emp1 = new Employee();

emp1.id = 1;
emp1.name = "Eduardo";
emp1.address = "45, Rodeo dr.";
emp1.email = "edu@edu.com.br";

console.log(emp1);

class Staff {
  protected id!: number;
  name!: string;
  address!: string;
  email!: string;
  private idNumber: number;
  #isOnline: boolean; // another way to maka variables private

  constructor(
    id: number,
    name: string,
    address: string,
    email: string,
    idNumber: number,
    isOnline: boolean = false
  ) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.email = email;
    this.idNumber = idNumber;
    this.#isOnline = isOnline;
  }

  getNamewithAddress(): string {
    return `${this.name.toUpperCase()} at ${this.address}`;
  }

  static showPay(): number {
    // can only be accessed by Class, not object.
    return 123330;
  }
}

class Manager extends Staff {
  constructor(
    id: number,
    name: string,
    address: string,
    email: string,
    idNumber: number,
    isOnline: boolean = false
  ) {
    super(id, name, address, email, idNumber, isOnline);
  }

  getNamewithAddress(): string {
    return `${this.name} is a manager at ${this.address}`;
  }
}

let staffMember1 = new Staff(2, "Eduardo", "NYC", "edu@edu.com.br", 12435781);

console.log(Staff.showPay());

console.log(staffMember1);

let address = staffMember1.getNamewithAddress();
console.log(address);

let manager1 = new Manager(45, "Kevin", "BMW", "kevinH@bmw.com", 123789456);

console.log(manager1.getNamewithAddress());
