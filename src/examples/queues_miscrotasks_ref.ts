// exp. 4
console.log("cl 1");

process.nextTick(()=>{
    console.log("nt 1");
    process.nextTick(()=>console.log("nt in nt 1"));
});

Promise.resolve().then(()=>{
    console.log("pr 1");
    process.nextTick(()=>console.log("nt in pr 1"));
});

console.log("cl 2");

process.nextTick(()=>{
    console.log("nt 2");
    process.nextTick(()=>console.log("nt in nt 2"));

});

Promise.resolve().then(()=>{
    console.log("pr 2");
    process.nextTick(()=>console.log("nt in pr 2"));

});

console.log("cl 3");

process.nextTick(()=>{
    return console.log("nt 3");
});

Promise.resolve().then(()=>{
    return console.log("pr 3");
});

// exp. 3
// console.log("cl 1");
// process.nextTick(()=>console.log("nt 1"));
// Promise.resolve().then(()=>console.log("pr 1"));
// console.log("cl 2");
// process.nextTick(()=>console.log("nt 2"));
// Promise.resolve().then(()=>console.log("pr 2"));
// console.log("cl 3");
// process.nextTick(()=>console.log("nt 3"));
// Promise.resolve().then(()=>console.log("pr 3"));

// exp. 2
// console.log("cl 1");
// process.nextTick(()=>console.log("nt 1"));
// console.log("cl 2");
// process.nextTick(()=>console.log("nt 2"));
// console.log("cl 3");
// process.nextTick(()=>console.log("nt 3"));

// exp. 1
// console.log("1");
// process.nextTick(() => {
//   console.log("nt 2");
// });
// console.log("3");
// Promise.resolve()
//   .then(() => {
//     console.log("pr 4");
//   })
//   .then(() => {
//     console.log("pr 4-a");
//   })
//   .then(() => {
//     console.log("pr 4-b");
//     process.nextTick(() => {
//       console.log("nt 4-b-I");
//     });
//   })
//   .then(() => {
//     console.log("pr 4-c");
//   })
//   .then(() => {
//     console.log("pr 4-d");
//   })
//   .then(() => {
//     console.log("pr 4-e");
//   });
// console.log("5");
// Promise.resolve()
//   .then(() => {
//     console.log("pr 6");
//   })
//   .then(() => {
//     console.log("pr 6-a");
//   })
//   .then(() => {
//     console.log("pr 6-b");
//   })
//   .then(() => {
//     console.log("pr 6-c");
//   })
//   .then(() => {
//     console.log("pr 6-d");
//   });
// process.nextTick(() => {
//   console.log("nt 7");
// });
