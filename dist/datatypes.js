"use strict";
let fName = 'Edu';
let lName;
lName = 'John';
console.log(lName.toLowerCase());
let age;
age = 40;
console.log(`${age} is the age`);
let dob = "20";
let parse = parseInt(dob);
parse = parse + 10;
console.log(parse);
let list;
let list2;
list = ["Kevin", "Mitchel", "Sarah", "Marge", "David"];
let numbers;
numbers = [-2, -1, 0, 1, 2, 3, 4, 5, 6];
let filtered = numbers.filter((num) => num > 2);
let employee = list.filter((member) => member == "Sarah");
console.log(filtered);
let foundIt = numbers.find((num) => num == 3);
console.log(foundIt);
console.log(employee);
let sum = numbers.reduce((acc, num) => acc + num);
console.log(`the sum of the list is → ${sum}`);
let colour = 1;
console.log(colour);
let swapNumbers;
function swap(n1, n2) {
    return [n2, n1];
}
swapNumbers = swap(2, 80);
console.log(swapNumbers);
let department;
department = "HR";
console.log(department);
department = 45;
console.log(department);
//# sourceMappingURL=datatypes.js.map