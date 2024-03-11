import http from "node:http";

const server = http.createServer((_req, res) => {
//   res.writeHead(201, {
//     "Content-Type": "application/json",
//   });
//   res.end("Hi!!!\n");

    res.setHeader("Content-type", "text/plain");
    res.statusCode = 202;
    res.write("Hello!\n");
    res.end();

  //   console.log(res.getHeader("Content-Type"));
});

server.listen(3000);
