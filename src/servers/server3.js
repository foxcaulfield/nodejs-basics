const http = require("http");

const PORT = 3000;

const requestHandler = () => {
    return (req, res) => {
        console.log("test");
        res.statusCode = 200;
        res.setHeader("Content-type", "application/json; charset=utf-8");
        res.write("<h1>Hello from Node.js</h1>", "utf-8");
        res.end();
    };
};

const onServerStartHandler = () => console.log("Server is running...");

const server = http.createServer(requestHandler());
server.listen(PORT, onServerStartHandler);
