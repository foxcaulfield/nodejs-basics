const { getRandomWord } = require("./utils.js");
const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
    const incomingUrl = new URL(req.url, `http://${req.headers.host}`);

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({
        // protocol: incomingUrl.protocol,
        hostname: incomingUrl.hostname,
        port: incomingUrl.port,
        // pathname: incomingUrl.pathname,
        // search: incomingUrl.search,
        word: getRandomWord()

    }));
});

server.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});