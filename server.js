
var express = require("express");
var hbs=require("hbs");

var app = express();
app.use(express.static('static'));
hbs.registerPartials(__dirname + "/views/partials");

app.set("view engine", "hbs");

app.get("/", function(request, response){

    response.render("home.hbs");
});
app.get("/contact", function(request, response){

    response.render("contact.hbs", {
        title: "Мои контакты",
        emailsVisible: true,
        emails: ["gavgav@mycorp.com", "mioaw@mycorp.com"],
        phone: "+1234567890"
    });
});
app.get("/index", function(request, response){
    response.render("index.hbs");
});
app.get("/twitter", function(request, response){
    response.render("twitter.hbs");
});
app.listen(3000);



