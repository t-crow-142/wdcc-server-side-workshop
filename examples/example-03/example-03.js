
const myFirstAddFunction = require("./modules/first-module");

const result1 = myFirstAddFunction(3, 4);
console.log(result1); // Will be 7

const maths = require("./modules/maths");

const result2 = maths.add(7, 8);
console.log(result2); // Will be 15

const result3 = maths.subtract(8, 2);
console.log(result3) // Will be 6