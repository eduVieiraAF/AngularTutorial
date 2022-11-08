"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Staff_isOnline;
class Employee {
}
let emp1 = new Employee();
emp1.id = 1;
emp1.name = "Eduardo";
emp1.address = "45, Rodeo dr.";
emp1.email = "edu@edu.com.br";
console.log(emp1);
class Staff {
    constructor(id, name, address, email, idNumber, isOnline = false) {
        _Staff_isOnline.set(this, void 0);
        this.id = id;
        this.name = name;
        this.address = address;
        this.email = email;
        this.idNumber = idNumber;
        __classPrivateFieldSet(this, _Staff_isOnline, isOnline, "f");
    }
    getNamewithAddress() {
        return `${this.name.toUpperCase()} at ${this.address}`;
    }
    static showPay() {
        return 123330;
    }
}
_Staff_isOnline = new WeakMap();
class Manager extends Staff {
    constructor(id, name, address, email, idNumber, isOnline = false) {
        super(id, name, address, email, idNumber, isOnline);
    }
    getNamewithAddress() {
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
//# sourceMappingURL=classes.js.map