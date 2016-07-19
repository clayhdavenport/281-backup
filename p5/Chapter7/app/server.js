var http = require("http"),
    port = process.env.PORT || 3000;;

server = http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello from Cloud Foundry");
});

server.listen(port);

console.log("Server listening on port" = port);
