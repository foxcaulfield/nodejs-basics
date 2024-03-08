import letItBeAdd from "./exp1.mjs";
import itDidntHaveNameAtAll from "./exp2.mjs";
import mathematics from "./exp3.mjs";
// import * as math4 from "./exp4.mjs";
import { add, subtract as sub4 } from "./exp4.mjs";

const { add: add3, subtract: sub3 } = mathematics;

console.log(letItBeAdd(23, 42));
console.log(itDidntHaveNameAtAll(23, 42));
console.log(add3(23,42), sub3(23,42));
// console.log(math4.add(23,42), math4.subtract(23,42));
console.log(add(23,42), sub4(23,42));