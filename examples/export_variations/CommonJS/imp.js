const add1 = require("./exp1");
const add2 = require("./exp2");
const { add: add3, subtract: sub3 } = require("./exp3");
const { add: add4, subtract: sub4 } = require("./exp4");
const { add: add5, subtract: sub5 } = require("./exp4");

console.log(add1(23, 42));
console.log(add2(23, 42));
console.log(add3(23, 42), sub3(23, 42));
console.log(add4(23, 42), sub4(23, 42));
console.log(add5(23, 42), sub5(23, 42));