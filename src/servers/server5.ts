import http from "node:http";

const server = http.createServer((_req, res) => {
  const someUser = {
    firstName: "Mark",
    hasPet: true,
  };

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.write(JSON.stringify(someUser));

  res.end();
});

server.listen(3000);
