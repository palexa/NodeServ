var user=require("./user");
function run() {
    var vasya=new user.User("vasia");
    var petya=new user.User("petya");
    vasya.hello(petya);
}


if(module.parent){
    exports.run=run;
}
else {
    run();
}
