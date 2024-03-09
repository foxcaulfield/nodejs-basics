const http = require("http");

const port = 4000;

const server = http.createServer((req, res) => {
    const incomingUrl = new URL(req.url, `http://${req.headers.host}`);
    console.log(incomingUrl.searchParams);

    res.setHeader("Content-type", "text/plain; charset=utf-8");

    if (incomingUrl.searchParams.has("message")) {
        res.statusCode = 200;
        res.write(incomingUrl.searchParams.get("message"), "utf-8");
    } else {
        res.statusCode = 400;
        res.write("Передайте строку в параметре message GET-запроса", "utf-8");
    }
    res.end();
});

server.listen(port, () => {
    console.log("Server sychro start");
});