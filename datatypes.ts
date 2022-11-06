let fName = 'Edu';
let lName: String;

lName = 'John';
console.log(lName.toLowerCase())

let age: Number;
age = 40;

console.log(`${ age } is the age`);

let dob = "20";
let parse = parseInt(dob)
parse = parse + 10;

console.log(parse)

let list: string[];
let list2: Array<string>;

list = ["Kevin", "Mitchel", "Sarah", "Marge", "David"]

let numbers: Array<number>;

numbers = [-2, -1, 0, 1, 2, 3, 4, 5, 6]

let filtered = numbers.filter((num) => num > 2);
let employee = list.filter((member) => member == "Sarah");

console.log(filtered);

let foundIt = numbers.find((num) => num == 3);

console.log(foundIt);
console.log(employee);

let sum = numbers.reduce((acc, num) => acc + num);

console.log(`the sum of the list is → ${ sum }`)

const enum Colour {
    RED ,
    GREEN,
    BLUE,
}

let colour: Colour = Colour.GREEN;

console.log(colour);

//* tuple
let swapNumbers: [num1: number, num2: number];

function swap(n1: number, n2: number): [number, number] {
    return [n2, n1]
}

swapNumbers = swap(2, 80);

console.log(swapNumbers)


let department: any;

department = "HR";
console.log(department);

department = 45;
console.log(department);
