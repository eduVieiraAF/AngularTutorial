//* Interfaces are used to define your own data type and can also have function definitions

export interface User {
  id: number;
  name: string;
  address?: string;
  email: string;
}

export interface Gamer extends User {
  console?: string;
  token?: number;
}

export interface IsOnline {
  IsOnline(): Gamer;
}

let user1: User = {
  id: 12,
  name: "Edu",
  address: "145, Street ave.",
  email: "edu@edu.net",
};

let user2: User = {
  id: 45,
  name: "Kevin",
  email: "kevin@msg.com",
};

console.log(user1);
console.log(user2);

let employee1: Gamer = {
  id: 124,
  name: "Nancy Smith",
  email: "nansmith@honeywell.com",
  console: "PC",
};

console.log(employee1);

let { name: userName, email: login }: User = {
  // object distructing
  id: 145,
  name: "Karen",
  email: "k.simons@gmail.com",
};

console.log(userName);
console.log(login);

export interface Login {
  Login(): User;
}

let [users1, users2, ...restusers]: User[] = [
  { name: "Edu", id: 758, email: "edu@edu.ca" },
  { name: "Edu", id: 759, email: "edu@edu.com" },
  { name: "Edu", id: 760, email: "edu_@edu.com" }
];

console.log(users1.email);
console.log(users2.name);
console.log(restusers);

let result = restusers.filter(user => user.id < 758);

console.log(result);