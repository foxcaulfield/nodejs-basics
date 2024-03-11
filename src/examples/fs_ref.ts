import fs from "node:fs/promises";
import path from "node:path";

async function processFiles(): Promise<void> {
  const filePath = path.resolve(process.cwd(), "json", "test.txt");
  await fs.writeFile(filePath, "Test content\n", { flag: "a" });
  const result = await fs.readFile(filePath, "utf-8");
  console.log(result);
}

processFiles();
// ------------------------
/*

// const fs = require("node:fs");
// const path = require("node:path");
import fs from "node:fs";
import path from "node:path";

const filePath = path.resolve(process.cwd(), "json", "users.json");
// const fileData = fs.readFileSync(filePath, "utf-8");
// console.log(fileData);

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log("File read");
    console.log(data.length);
  }
});

const writePath = path.resolve(process.cwd(), "json", "note1.json");
fs.writeFileSync(writePath, JSON.stringify({ smth: ["hello", "world"] }));

fs.writeFile(writePath, JSON.stringify(["Hi"]), { flag: "a" }, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("File written async");
  }
});

*/
// ------------------------
// const hasFile = fs.existsSync(path.resolve(__dirname, "./notes"));

// if (hasFile) {
//     console.log("Dir already exists");
// } else {
//     console.log("Dir doesn't exist");
//     console.log("Creating file...");
//     // fs.mkdirSync(path.resolve(__dirname, "./notes"));
//     fs.mkdir(path.resolve(__dirname, "./notes"), (err) => {
//         if (err) {
//             throw err;
//         }
//         console.log("Done");
//     });
//     console.log("The last line");
// }

// console.log("Outer code");

// const newFilePath = path.resolve(__dirname, "./note1.txt");

// // fs.writeFile(newFilePath, "Hello, world!", (err) => {
// fs.appendFile(newFilePath, "Hello, world!\n", (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log("File is ready!");

//     fs.readFile(newFilePath, "utf-8", (err, data) => {
//         if (err) {
//             throw err;
//         }

//         console.log(Buffer.from(data).toString());
//     });
// });
