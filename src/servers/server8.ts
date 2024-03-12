import http from "node:http";

interface serverCallback {
  (
    request: http.IncomingMessage,
    response: http.ServerResponse<http.IncomingMessage> & {
      req: http.IncomingMessage;
    }
  ): void;
}

const PORT = 3000;

const handler: serverCallback = (req, res) => {
  const reqUrl = req.url;
  if (reqUrl === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Homepage</h1><div>Welcome!</div>");
    res.end();
  } else if (reqUrl === "/about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("<h2>About page</h2><div>We are the company</div>");
    res.end();
  } else if (reqUrl === "/api") {
    res.statusCode = 200;
    res.setHeader("Content-type", "application/json");
    res.write(JSON.stringify({ city: "Gotham", code: 4815162342 }));
    res.end();
  } else if (reqUrl === "/lorem") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.write("Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n");
    res.end();
  } else {
    res.statusCode = 404;
    res.end("Not found");
  }

  //   res.setHeader("Content-Type", "application/json");
  //   res.setHeader("Content-Type", "text/plain");
  //   res.write(
  //     JSON.stringify({ ...req.headers, method: req.method, url: req.url })
  //   );
  //   res.write(JSON.stringify(req.statusCode));
  //   res.write(JSON.stringify(req.url));
  //   res.end();
};

http.createServer(handler).listen(PORT);
