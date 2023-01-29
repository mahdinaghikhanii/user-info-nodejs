const url = require('url');
const http = require('http');
const database = require('./database');




const server = http.createServer((req, res )=> {
    console.log('thas it ');
    console.log(database.database.users);
    const queryStrigns = url.parse(req.url ,true).query;
    console.log(queryStrigns);
    if(req.url == '/api/users'){
        res.write(JSON.stringify(database.database.users));
        res.end();
    }else if (queryStrigns.username ==  database.database.users.username || queryStrigns.password == database.database.users.password){
        res.write("welcome mahdi ! \nSuccess login");
        res.end();
    }
    else{
        res.write("Error 404 Not Found!");
        res.end();
    }
    
}) 

server.listen(3000);