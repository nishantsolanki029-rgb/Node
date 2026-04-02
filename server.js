// if you want to create a node server use http module of node

// http and http modules 
// 1. protocols ==> rules ==> how to send data, how to recieve data, how to handle errors, how to manage connections,etc.
// 2. http ==> Hypertext Transfer Protocol
// 3. https ==> hypertext Transfer Protocol Secure

// http and https modules are used to crfeate web servers, make HTTP requests, and handle HTTP response in Node.js. They provide a way to communicate over the web using the HTTP protocol. The http moidule is used for non-secure communicatation , while the https module is used secure communication using SSL/TLS encryption.


const http = require("http");

// create a route for homepage only
// req ==> send by users
// res ==> send by server
const server = http.createServer((req, res) => {
    console.log(req);
    res.end("Hello World");
});

server.listen(3000, () => {
    console.log("go to browser and check localhost:3000");
});