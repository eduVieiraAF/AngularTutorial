//* Example 01 - regular function
function add(a: number, b: number): number {
    return a + b;
}

console.log(add(45, 36));

//* Example 02 = arrow function
const sub = (a: number, b: number): number => a - b;

console.log(sub(12, 5));


//* Example 03 - function keyword inside a const/let
const mult = function(a: number, b: number): number {
    return a * b;
}

console.log(mult(40, 5));

//* Optional arguments '?'
const add2 = (a: number, b: number, c?: number): number => c? a + b + c : a + b;

console.log(add2(12, 45 ,6));
console.log(add2(45, 14));

//* Multiple arguments
function add3(a: number, b: number, ...c: number[]): number {
    return a + b + c.reduce((n1, n2) => n1 + n2 + 0);
}

console.log(add3(23, 45, 45, 85, 45, 1000));

//* <Type>
function getItem<Type>(items: Type[]): Type[] {
    return new Array<Type>().concat(items);
}

let concatString = getItem<string>(["E", "d", "u"]);
let concatNumbers = getItem<number>([1, 2, 3, 4, 5]);

console.log(concatString);
console.log(concatNumbers);
