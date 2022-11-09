
//* Interfaces are used to define your own data type and can also have function definitions

export interface User {
    id: number;
    name: string;
    address?: string;
    email: string;
}

export interface Gamer extends User {
    console?: string;
    token?: number
}

export interface IsOnline {
    IsOnline(): Gamer;
}

let user1: User = { 
    id: 12,
    name: "Edu",
    address: "145, Street ave.",
    email: "edu@edu.net"
}

let user2: User = {
    id: 45,
    name: "Kevin",
    email: "kevin@msg.com"
}

console.log(user1);
console.log(user2);

let employee1: Gamer = {
    id: 124,
    name: "Nancy Smith",
    email: "nansmith@honeywell.com",
    console: "PC",
}

console.log(employee1);