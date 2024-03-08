const http = require("http");
const EventEmitter = require("events");

const HOSTNAME = "127.0.0.1";
const PORT = 3000;

const server = http.createServer();
console.log(server instanceof EventEmitter);

server.on("request", function logger(req, res) {
    const requestUrl = new URL(req.url, `http://${HOSTNAME}:${PORT}`);
    console.log(JSON.stringify({
        protocol: requestUrl.protocol,
        hostname: requestUrl.hostname,
        port: requestUrl.port,
        pathname: requestUrl.pathname,
        search: requestUrl.search
    }));
    // res.end("Log done");
});

server.on("request", function handler(req, res) {
    res.statusCode = 200;
    res.end("Handle done");
});

server.listen(PORT, HOSTNAME, () => console.log(`Server is running at http://${HOSTNAME}:${PORT}`));

// server.emit("request", new http.IncomingMessage());