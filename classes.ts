//* no constuctors
class Employee {
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

console.log(emp1)

class Staff {
    id!: number;
    name!: string;
    address!: string;
    email!: string;

    constructor(
        id: number,
        name: string,
        address: string,
        email:string
    ) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.email = email;
    }
}

let staffMember1 = new Staff(2, "Eduardo", "NYC", "edu@edu.com.br");

console.log(staffMember1);
   