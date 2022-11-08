"use strict";
class Employee {
}
let emp1 = new Employee();
emp1.id = 1;
emp1.name = "Eduardo";
emp1.address = "45, Rodeo dr.";
emp1.email = "edu@edu.com.br";
console.log(emp1);
class Staff {
    constructor(id, name, address, email) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.email = email;
    }
}
let staffMember1 = new Staff(2, "Eduardo", "NYC", "edu@edu.com.br");
console.log(staffMember1);
//# sourceMappingURL=classes.js.map