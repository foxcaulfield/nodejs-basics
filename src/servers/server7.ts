import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const server = http.createServer((_req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  const name = "Abcde";
  let htmlContent = fs.readFileSync(
    path.resolve(process.cwd(), "files", "index2.html"),
    "utf-8"
  );

  htmlContent = htmlContent.replace("{{name}}", name);
  res.end(htmlContent);
});

server.listen(3000);
