#!/usr/bin/env node

const yargs = require("yargs");

console.log("Done!");

const y = yargs(process.argv);

console.log(process.argv);
console.log(process.argv[0]);
console.log(process.argv0);
console.log(y);
console.log(y.argv);