"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user1 = {
    id: 12,
    name: "Edu",
    address: "145, Street ave.",
    email: "edu@edu.net",
};
let user2 = {
    id: 45,
    name: "Kevin",
    email: "kevin@msg.com",
};
console.log(user1);
console.log(user2);
let employee1 = {
    id: 124,
    name: "Nancy Smith",
    email: "nansmith@honeywell.com",
    console: "PC",
};
console.log(employee1);
let { name: userName, email: login } = {
    id: 145,
    name: "Karen",
    email: "k.simons@gmail.com",
};
console.log(userName);
console.log(login);
let [users1, users2, ...restusers] = [
    { name: "Edu", id: 758, email: "edu@edu.ca" },
    { name: "Edu", id: 759, email: "edu@edu.com" },
    { name: "Edu", id: 760, email: "edu_@edu.com" }
];
console.log(users1.email);
console.log(users2.name);
console.log(restusers);
let result = restusers.filter(user => user.id < 758);
console.log(result);
//# sourceMappingURL=interfaces.js.map