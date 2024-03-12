import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const server = http.createServer((_req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  /* 3 */
  const readableStream = fs.createReadStream(
    path.resolve(process.cwd(), "files", "index1.html")
  );
  readableStream.pipe(res);
//   res.end();

  /* 2 */
  // const htmlContent = fs.readFileSync(path.resolve(process.cwd(), "files", "index1.html"))
  // res.end(htmlContent);

  /* 1 */
  // res.end("<h1>Hello, world!</h1>");
});

server.listen(3000);
