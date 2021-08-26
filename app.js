const http = require('http'); //global module


const server = http.createServer((req, res) => { // creating the server requesting
    console.log(req);
});

server.listen(3000) //listening to server port number 3000
