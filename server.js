var db=require('db');
db.connect();
var log=require("logger")(module);
var User=require("./user");
function run() {
    var vasya=new User("vasia");
    var petya=new User("petya");
    vasya.hello(petya);
    log(db.getPhrase("Succesful"));
}


if(module.parent){
    exports.run=run;
}
else {
    run();
}
