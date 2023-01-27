const { json } = require('express');
const http = require('http');
const url = require('url');

let database = {
   users : [
    {id : 1 , username : 'mahdi' , email : "mahdi@gmail.com" ,password : "123456"},
    {id : 2 , username : 'ali' , email : "alii@gmail.com" ,password : "123456"},
    {id : 3 , username : 'amin' , email : "amin@gmail.com" ,password : "123456"},
   ],
   courses : [
    {id : 1 , courses : 'Flutter' , price : "2000"},
    {id : 2 , courses : 'JS' , price : "7000"},
    {id : 3 , courses : 'Node' , price : "5000"},
   ]
}
const server =  http.createServer((req , res)=> {
    const queryStrigns = url.parse(req.url ,true).query;
    console.log(queryStrigns.name);
   // console.log(req.url);
    if(req.url == '/api/users'){
        let users = database.users;
        res.write(JSON.stringify(users));
        res.end();
    }else if (req.url == '/api/courses'){
        let courses = database.courses;
        res.write(JSON.stringify(courses));
        res.end();
    }else{
        res.write("Error 404 API not found =(");
        res.end();
    }
});

server.listen(3000);