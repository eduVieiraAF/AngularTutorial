"use strict";
function add(a, b) {
    return a + b;
}
console.log(add(45, 36));
const sub = (a, b) => a - b;
console.log(sub(12, 5));
const mult = function (a, b) {
    return a * b;
};
console.log(mult(40, 5));
const add2 = (a, b, c) => c ? a + b + c : a + b;
console.log(add2(12, 45, 6));
console.log(add2(45, 14));
function add3(a, b, ...c) {
    return a + b + c.reduce((n1, n2) => n1 + n2 + 0);
}
console.log(add3(23, 45, 45, 85, 45, 1000));
function getItem(items) {
    return new Array().concat(items);
}
let concatString = getItem(["E", "d", "u"]);
let concatNumbers = getItem([1, 2, 3, 4, 5]);
console.log(concatString);
console.log(concatNumbers);
//# sourceMappingURL=functions.js.map