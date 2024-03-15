import fs from "node:fs";

const rs1 = fs.createReadStream(__filename).on("close", () => {
  console.log("rs1 closed");
  process.nextTick(() => console.log("next tick inside rs1 closed"));
});
rs1.close();

const rs2 = fs.createReadStream(__filename).on("close", () => {
  console.log("rs2 closed");
  process.nextTick(() => console.log("next tick inside rs2 closed"));
});
rs2.close();

const rs3 = fs.createReadStream(__filename).on("close", () => {
  console.log("rs3 closed");
});
rs3.close();

// ===== ===== =====

// fs.readFile(__filename, () => {
//   console.log("readfile 1");
//   queueMicrotask(() => console.log("queue microtask inside readfile 1"));
// }); //
// // for (let i = 0; i < 5000000000; ++i) {}
// fs.readFile(__filename, () => {
//   console.log("readfile 2");
//   setTimeout(() => console.log("set timeout inside readfile 2"), 0);
//   //    for (let i = 0; i < 5000000000; ++i) {}
// }); //
// // for (let i = 0; i < 5000000000; ++i) {}
// fs.readFile(__filename, () => {
//   console.log("readfile 3");
//   process.nextTick(() => console.log("next tick inside readfile 3"));
// }); //
// // for (let i = 0; i < 5000000000; ++i) {}
// fs.readFile(__filename, () => {
//   console.log("readfile 4");
// }); //

// // for (let i = 0; i < 5000000000; ++i) {}

// ===== ===== =====
// --- --- ---
// const fs = require("node:fs");

// setTimeout(() => console.log("set setTimeout 1"));
// setTimeout(() => {
//   console.log("set setTimeout 2");
//   process.nextTick(() => console.log("next tick inside set setTimeout 2"));
//   Promise.resolve().then(() => console.log("promise resolve inside set setTimeout 2"));
//   setTimeout(() => console.log("set timeout inside set setTimeout 2"));
//   for (let i = 0; i < 2000000000; ++i) {}
// });
// setTimeout(() => console.log("set setTimeout 3"));

// // --- --- ---
// setImmediate(() => console.log("set immediate 1"));
// setImmediate(() => {
//   console.log("set immediate 2");
//   process.nextTick(() => console.log("next tick inside set immediate 2"));
//   Promise.resolve().then(() => console.log("promise resolve inside set immediate 2"));
//   setTimeout(() => console.log("set timeout inside set immediate 2"));
//   for (let i = 0; i < 2000000000; ++i) {}
// });
// setImmediate(() => console.log("set immediate 3"));

// // --- --- ---

// const fs = require("node:fs");

// setTimeout(() => console.log("timeout 1"), 0); //

// fs.readFile(__filename, () => console.log("readfile 1")); //

// setImmediate(() => console.log("set immediate 1"));
// setImmediate(() => {
//   console.log("set immediate 1-a");
// //   setTimeout(() => console.log("set timeout inside set immediate 1"));
//   setImmediate(() => console.log("set immediate inside set immediate 1"));
// });

// queueMicrotask(() => console.log("queue microtask 1")); //
// process.nextTick(() => console.log("nexttick 1")); //
// Promise.resolve().then(() => console.log("promise resolve 1")); //

// setImmediate(() => console.log("set immediate 2"));

// for (let i = 0; i < 2000000000; ++i) {}
