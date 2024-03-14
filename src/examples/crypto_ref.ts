// import crypto from "node:crypto";
import os from "node:os";
import https from "node:https";

// const start = Date.now();
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// console.log(Date.now() - start);

// @ts-ignore
// process.env.UV_THREADPOOL_SIZE = 16;

console.log(os.cpus().length);
const MAX_CALLS = 50;

const start = Date.now();
for (let i = 0; i < MAX_CALLS; ++i) {
  https.request("https://google.com/", (res) => {
    res.on("data", (_chunk) => {
      // console.log("chunk", chunk);
    });
    res.on("end", () => {
      console.log(`Request: ${i + 1}`, Date.now() - start);
    });
  }).end();

  // crypto.pbkdf2("password", "salt", 500000, 512, "sha512", (_err, _derived) => {
  //   // console.log(derived);
  //   console.log(`Hash: ${i + 1}`, Date.now() - start);
  // });
}
