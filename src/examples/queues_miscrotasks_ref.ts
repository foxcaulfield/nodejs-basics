const clog = console.log;

// ex. 9
console.log("clog 1");
console.log("clog 2");
console.log("clog 3");

setTimeout(() => {
  clog("timeout 1");
}, 0);
setTimeout(() => {
  clog("timeout 2");
}, 0);
setTimeout(() => {
  clog("timeout 3");
  process.nextTick(() => clog("nexttick in timeout 3"));

  Promise.resolve().then(() => {
    clog("promise in timeout 3");
    Promise.resolve().then(() => {
      clog("1-deeper promise in timeout 3");
      process.nextTick(() => clog("1-deeper nexttick in timeout 3"));
      Promise.resolve().then(() => {
        clog("2-deeper promise in timeout 3");
      });
    });
  });
  queueMicrotask(() => clog("queueMicrotask in timeout 3"));
}, 0);

Promise.resolve().then(() => {
  clog("promise 1");
});
Promise.resolve().then(() => {
  clog("promise 2");
  setTimeout(() => {
    clog("timeout in promise 2");
  }, 0);
});
Promise.resolve().then(() => {
  clog("promise 3");
  queueMicrotask(() => {
    clog("queuemicrotask in promise 3");
    process.nextTick(() => clog("nexttick in queuemicrotask in promise 3"));
    setTimeout(() => {
      clog("timeout in queuemicrotask in promise 3");
    }, 0);
  });
});

process.nextTick(() => clog("nexttick 1"));
process.nextTick(() => clog("nexttick 2"));
process.nextTick(() => clog("nexttick 3"));

queueMicrotask(() => {
  clog("queuemicrotask 1");
  setTimeout(() => {
    clog("timeout in queuemicrotask 1");
  }, 0);
});
queueMicrotask(() => {
  clog("queuemicrotask 2");
});
queueMicrotask(() => {
  clog("queuemicrotask 3");
});

// // ex. 8
// console.log("clog 1");
// console.log("clog 2");
// console.log("clog 3");

// setTimeout(() => {
//   clog("timeout 1");
// }, 0);
// setTimeout(() => {
//   clog("timeout 2");
// }, 0);
// setTimeout(() => {
//   clog("timeout 3");
//   queueMicrotask(() => clog("queueMicrotask in timeout 3"));
//   Promise.resolve().then(() => clog("promise in timeout 3"));
//   process.nextTick(() => clog("nexttick in timeout 3"));
// }, 0);

// Promise.resolve().then(() => {
//   clog("promise 1");
// });
// Promise.resolve().then(() => {
//   clog("promise 2");
//   setTimeout(() => {
//     clog("timeout in promise 2");
//   }, 0);
// });
// Promise.resolve().then(() => {
//   clog("promise 3");
//   queueMicrotask(() => {
//     clog("queuemicrotask in promise 3");
//     process.nextTick(() => clog("nexttick in queuemicrotask in promise 3"));
//     setTimeout(() => {
//       clog("timeout in queuemicrotask in promise 3");
//     }, 0);
//   });
// });

// process.nextTick(() => clog("nexttick 1"));
// process.nextTick(() => clog("nexttick 2"));
// process.nextTick(() => clog("nexttick 3"));

// queueMicrotask(() => {
//   clog("queuemicrotask 1");
//   setTimeout(() => {
//     clog("timeout in queuemicrotask 1");
//   }, 0);
// });
// queueMicrotask(() => {
//   clog("queuemicrotask 2");
// });
// queueMicrotask(() => {
//   clog("queuemicrotask 3");
// });

// // ex. 7
// console.log("clog 1");
// console.log("clog 2");
// console.log("clog 3");

// setTimeout(() => {
//   clog("timeout 1");
// }, 0);
// setTimeout(() => {
//   clog("timeout 2");
// }, 0);
// setTimeout(() => {
//   clog("timeout 3");
// }, 0);

// Promise.resolve().then(() => {
//   clog("promise 1");
// });
// Promise.resolve().then(() => {
//   clog("promise 2");
// });
// Promise.resolve().then(() => {
//   clog("promise 3");
// });

// process.nextTick(() => {
//   clog("nexttick 1");
// });
// process.nextTick(() => {
//   clog("nexttick 2");
// });
// process.nextTick(() => {
//   clog("nexttick 3");
// });

// queueMicrotask(() => {
//   clog("queuemicrotask 1");
// });
// queueMicrotask(() => {
//   clog("queuemicrotask 2");
// });
// queueMicrotask(() => {
//   clog("queuemicrotask 3");
// });

// ex. 6
// console.log("clog 1");
// console.log("clog 2");
// console.log("clog 3");

// setTimeout(() => clog("timeout 1"), 0);
// setTimeout(() => clog("timeout 2"), 0);
// setTimeout(() => clog("timeout 3"), 0);

// Promise.resolve().then(() => clog("promise 1"));
// Promise.resolve().then(() => clog("promise 2"));
// Promise.resolve().then(() => clog("promise 3"));

// process.nextTick(() => clog("nexttick 1"));
// process.nextTick(() => clog("nexttick 2"));
// process.nextTick(() => clog("nexttick 3"));

// queueMicrotask(() => clog("queuemicrotask 1"));
// queueMicrotask(() => clog("queuemicrotask 2"));
// queueMicrotask(() => clog("queuemicrotask 3"));

// ex. 5
// setTimeout(()=>console.log("st 1"), 0);
// Promise.resolve().then(() => console.log("pr 1-1"));
// Promise.resolve().then(() => console.log("pr 1-2"));
// queueMicrotask(() => console.log("qm 1"));
// process.nextTick(() => console.log("nt 1"));

// setTimeout(()=>console.log("st 2"), 0);
// Promise.resolve().then(() => console.log("pr 2"));
// queueMicrotask(() => console.log("qm 2"));
// process.nextTick(() => console.log("nt 2"));

// exp. 4
// console.log("cl 1");

// process.nextTick(()=>{
//     console.log("nt 1");
//     process.nextTick(()=>console.log("nt in nt 1"));
// });

// Promise.resolve().then(()=>{
//     console.log("pr 1");
//     process.nextTick(()=>console.log("nt in pr 1"));
// });

// console.log("cl 2");

// process.nextTick(()=>{
//     console.log("nt 2");
//     process.nextTick(()=>console.log("nt in nt 2"));

// });

// Promise.resolve().then(()=>{
//     console.log("pr 2");
//     process.nextTick(()=>console.log("nt in pr 2"));

// });

// console.log("cl 3");

// process.nextTick(()=>{
//     return console.log("nt 3");
// });

// Promise.resolve().then(()=>{
//     return console.log("pr 3");
// });

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
