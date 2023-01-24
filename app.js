const http = require('http');


http.createServer((req , res)=> {
    console.log("req is here");
    res.end();
}).listen(3000);