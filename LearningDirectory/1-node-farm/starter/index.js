const fs = require("fs");
const https = require("http");

const server = https.createServer((req, res) => {
    res.end("server on");
});

server.listen(8000, "127.0.0.1", () => {
    console.log("on")
})