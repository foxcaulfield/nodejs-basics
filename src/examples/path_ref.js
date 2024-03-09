const path = require("node:path");


console.log("--- join ");
console.log(path.join("folder1", "folder2", "folder3", "index.html"));
console.log(path.join("/folder1", "/folder2", "/folder3", "index.html"));
console.log(path.join("//folder1", "//folder2", "folder3", "//index.html"));
console.log(path.join("folder1", "folder2", "..", "../index.html"));
console.log(path.join(__dirname, "index.html"));
console.log("--- resolve");
console.log(path.resolve("folder1", "folder2", "folder3", "index.html"));
console.log(path.resolve("/folder1", "/folder2", "/folder3", "index.html"));
console.log(path.resolve("//folder1", "//folder2", "folder3", "//index.html"));
console.log(path.resolve("folder1", "folder2", "..", "../index.html"));
console.log(path.resolve(__dirname, "index.html"));


// console.log(__dirname);
// console.log(__filename);

// console.log(path.basename(__dirname));
// console.log(path.basename(__filename));

// console.log(path.extname(__dirname));
// console.log(path.extname(__filename));

// console.log(path.format(path.parse(__filename)));

// console.log(path.isAbsolute(__filename));

// console.log(__filename);
// console.log(path.basename(__filename));
// console.log(path.dirname(__filename));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));
// console.log(path.join(__dirname, "folder2", "sample.txt"));