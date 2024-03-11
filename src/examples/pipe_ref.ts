import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";

const gzip = zlib.createGzip();
const pathFrom = path.resolve(process.cwd(), "files", "text3.txt");
const pathTo = path.resolve(process.cwd(), "files", "text4.txt");

const readableStream = fs.createReadStream(pathFrom, "utf-8");
const writableStream = fs.createWriteStream(pathTo, {
  encoding: "utf-8",
  highWaterMark: 2,
});

readableStream.pipe(writableStream);

const { dir: gzdir, name: gzname } = path.parse(pathFrom);
const gzOutPath = path.resolve(gzdir, gzname + ".txt.gz");
const gzWriteStream = fs.createWriteStream(gzOutPath);
readableStream.pipe(gzip).pipe(gzWriteStream);
