/*
const http = require("http");
const colors = require("colors");
const handleServer = function (req, res){
   res.writeHead(200, {"content-type" : "text/plain"});
   res.write("<h1>hola mundo</h1>");
   res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function () {
    console.log("server on port 3000".green)
});
*/

const express = require("express");
const colors = require("colors");
const server = express();

server.get("/" , function (req, res){
    res.send("<h1>hola mundo con express y node</h1>")
    res.end();
})

server.listen(3000, function() {
    console.log("sever on port 3000".blue);
});
 
 



