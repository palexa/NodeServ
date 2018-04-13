var http = require('http');
var url = require('url');
var fs = require('fs');
var express=require('express');
var app=new express();
var productRouter = express.Router();
productRouter.route("/")
    .get(function(request, response){

        response.send("Список товаров");
    });
productRouter.route("/:id")
    .get(function(request, response){
console.log(request.params.id);
        response.send('Товар '+request.params.id);
    });
app.use("/products", productRouter);

app.get("/", function(request, response){

    response.send("Главная страница");
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