import fs from "node:fs";
import path from "node:path";

const path1 = path.resolve(process.cwd(), "json", "text1.txt");
const path2 = path.resolve(process.cwd(), "json", "text2.txt");

const readableStream = fs.createReadStream(path1, {
  encoding: "utf-8",
  highWaterMark: 2,
});

const writableStream = fs.createWriteStream(path2);

readableStream.on("data", (chunk) => {
  console.log(chunk);
  writableStream.write(chunk);
  writableStream.write("|");
});
