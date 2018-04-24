var phrases=require('./ru');
var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");

var app = express();
var jsonParser = bodyParser.json();
var hbs=require("hbs");

app.use(express.static(__dirname + "/static"));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.get("/index",function (req,res) {
    res.render("index.hbs",{
        page:phrases.Home,
        Home:phrases.Home,
        Blog:phrases.Blog,
        Board:phrases.Board,
        Teams:phrases.Teams,
        Dravings:phrases.Dravings,
        Galery:phrases.Galery,
        Settings:phrases.Settings
    });
});
app.get("/blog",function (req,res) {
    res.render("blog.hbs",{
        page:phrases.Blog,
        Home:phrases.Home,
        Blog:phrases.Blog,
        Board:phrases.Board,
        Teams:phrases.Teams,
        Dravings:phrases.Dravings,
        Galery:phrases.Galery,
        Settings:phrases.Settings
    })
});
app.get("/galery",function (req,res) {
    res.render("galery.hbs",{
        page:phrases.Galery,
        Home:phrases.Home,
        Blog:phrases.Blog,
        Board:phrases.Board,
        Teams:phrases.Teams,
        Dravings:phrases.Dravings,
        Galery:phrases.Galery,
        Settings:phrases.Settings
    })
});
app.get("/board",function (req,res) {
    res.render("board.hbs",{
        page:phrases.Board,
        Home:phrases.Home,
        Blog:phrases.Blog,
        Board:phrases.Board,
        Teams:phrases.Teams,
        Dravings:phrases.Dravings,
        Galery:phrases.Galery,
        Settings:phrases.Settings
    })
});
app.get("/teams",function (req,res) {
    res.render("teams.hbs",{
        page:phrases.Teams,
        Home:phrases.Home,
        Blog:phrases.Blog,
        Board:phrases.Board,
        Teams:phrases.Teams,
        Dravings:phrases.Dravings,
        Galery:phrases.Galery,
        Settings:phrases.Settings
    })
});
app.get("/dravings",function (req,res) {
    res.render("dravings.hbs",{
        page:phrases.Dravings,
        Home:phrases.Home,
        Blog:phrases.Blog,
        Board:phrases.Board,
        Teams:phrases.Teams,
        Dravings:phrases.Dravings,
        Galery:phrases.Galery,
        Settings:phrases.Settings
    })
});
app.get("/settings",function (req,res) {
    res.render("settings.hbs",{
        page:phrases.Settings,
        Home:phrases.Home,
        Blog:phrases.Blog,
        Board:phrases.Board,
        Teams:phrases.Teams,
        Dravings:phrases.Dravings,
        Galery:phrases.Galery,
        Settings:phrases.Settings
    })
});

app.get("/registration",function (req,res) {
    res.render("registration.hbs");
});
app.get("/",function (req,res) {
    res.render("StartPage.hbs")
});

// получение списка данных
/*
app.get("/api/users", function(req, res){

    var content = fs.readFileSync("users.json", "utf8");
    var users = JSON.parse(content);
    console.log(content);
    console.log(users);
    res.send(users);
});
// получение одного пользователя по id
app.get("/api/users/:id", function(req, res){

    var id = req.params.id; // получаем id
    var content = fs.readFileSync("users.json", "utf8");
    var users = JSON.parse(content);
    var user = null;
    // находим в массиве пользователя по id
    for(var i=0; i<users.length; i++){
        if(users[i].id==id){
            user = users[i];
            break;
        }
    }
    // отправляем пользователя
    if(user){
        res.send(user);
    }
    else{
        res.status(404).send();
    }
});
// получение отправленных данных
app.post("/api/users", jsonParser, function (req, res) {

    if(!req.body) return res.sendStatus(400);

    var userName = req.body.name;
    var userAge = req.body.age;
    var user = {name: userName, age: userAge};

    var data = fs.readFileSync("users.json", "utf8");
    var users = JSON.parse(data);

    // находим максимальный id
    var id = Math.max.apply(Math,users.map(function(o){return o.id;}))
    // увеличиваем его на единицу
    user.id = id+1;
    // добавляем пользователя в массив
    users.push(user);
    var data = JSON.stringify(users);
    // перезаписываем файл с новыми данными
    fs.writeFileSync("users.json", data);
    res.send(user);
});
// удаление пользователя по id
app.delete("/api/users/:id", function(req, res){

    var id = req.params.id;
    var data = fs.readFileSync("users.json", "utf8");
    var users = JSON.parse(data);
    var index = -1;
    // находим индекс пользователя в массиве
    for(var i=0; i<users.length; i++){
        if(users[i].id==id){
            index=i;
            break;
        }
    }
    if(index > -1){
        // удаляем пользователя из массива по индексу
        var user = users.splice(index, 1)[0];
        var data = JSON.stringify(users);
        fs.writeFileSync("users.json", data);
        // отправляем удаленного пользователя
        res.send(user);
    }
    else{
        res.status(404).send();
    }
});
// изменение пользователя
app.put("/api/users", jsonParser, function(req, res){

    if(!req.body) return res.sendStatus(400);

    var userId = req.body.id;
    var userName = req.body.name;
    var userAge = req.body.age;

    var data = fs.readFileSync("users.json", "utf8");
    var users = JSON.parse(data);
    var user;
    for(var i=0; i<users.length; i++){
        if(users[i].id==userId){
            user = users[i];
            break;
        }
    }
    // изменяем данные у пользователя
    if(user){
        user.age = userAge;
        user.name = userName;
        var data = JSON.stringify(users);
        fs.writeFileSync("users.json", data);
        res.send(user);
    }
    else{
        res.status(404).send(user);
    }
});
*/
app.listen(3000, function(){
    console.log("Сервер ожидает подключения...");
});