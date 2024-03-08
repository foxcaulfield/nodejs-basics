const fs = require("fs");
const path = require("path");

const hasFile = fs.existsSync(path.resolve(__dirname, "./notes"));

if (hasFile) {
    console.log("Dir already exists");
} else {
    console.log("Dir doesn't exist");
    console.log("Creating file...");
    // fs.mkdirSync(path.resolve(__dirname, "./notes"));
    fs.mkdir(path.resolve(__dirname, "./notes"), (err) => {
        if (err) {
            throw err;
        }
        console.log("Done");
    });
    console.log("The last line");
}

console.log("Outer code");

const newFilePath = path.resolve(__dirname, "./note1.txt");

// fs.writeFile(newFilePath, "Hello, world!", (err) => {
fs.appendFile(newFilePath, "Hello, world!\n", (err) => {
    if (err) {
        throw err;
    }
    console.log("File is ready!");

    fs.readFile(newFilePath, "utf-8", (err, data) => {
        if (err) {
            throw err;
        }

        console.log(Buffer.from(data).toString());
    });
});

