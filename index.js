//dependencies
const http = require('http');
const url = require('url');

//app object-module scaffolding
const app = {};

//configuration
app.config = {
    port: 3000,
}

//create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`listenng to port ${app.config.port}`);
    })
}
// handle request response
app.handleReqRes = (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath=path.replace(/^\/+|\/+$/g,'');
    const method=req.method.toLowerCase();

    console.log(trimmedPath);

    res.end('hello word');
}

//start the server
app.createServer();