// var http = require('http');
// var url = require('url');
// var fs = require('fs');
// var express=require('express');
// var app=new express();
//
// app.use("/static", express.static(__dirname + "/public"));
//
// app.get("/", function(request, response){
//
//     response.send("<h1>Главная страница</h1>");
// });
// app.get("/contact", function(request, response){
//
//     response.send("<h1>Контакты</h1>");
// });
// app.listen(3000);
var express = require("express");
var bodyParser = require("body-parser");

var app = express();

// создаем парсер для данных application/x-www-form-urlencoded
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static(__dirname + "/Pages"));

app.post("/register", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`${request.body.userName} - ${request.body.userAge}`);
});

app.get("/", function(request, response){
    response.send("<h1>Главная страница</h1>");
});
app.listen(3000);



/*
http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    console.log(q.pathname);
    if(q.pathname.substr(-4,4)=='html'){
        var filename = "./Pages/" + q.pathname;
    }
    else{
        var filename = "." + q.pathname;
    }
    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, {
                'Content-Type': 'text/html'
            });
            return res.end("404 Not Found");
        }
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
        });
        res.write(data);
        return res.end();
    });
}).listen(9090);
*/