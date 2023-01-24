const { json } = require('express');
const http = require('http');


let database = {
   users : [
    {id : 1 , username : 'mahdi' , email : "mahdi@gmail.com" ,password : "123456"},
    {id : 2 , username : 'ali' , email : "alii@gmail.com" ,password : "123456"},
    {id : 3 , username : 'amin' , email : "amin@gmail.com" ,password : "123456"},
   ],
   courses : [
    {id : 1 , title : 'Flutter' , price : "2000"},
    {id : 1 , title : 'JS' , price : "7000"},
    {id : 1 , title : 'Node' , price : "5000"},
   ]
}


const server =  http.createServer((req , res)=> {
    console.log(req.url);
    if(req.url == 'api/users'){
        let users = database.users;
        res.write(json(users));
    }
    res.end();
});

server.listen(3000);