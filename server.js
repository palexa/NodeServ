var util =require('util');
 var phrases={
   "Hello":"Привет",
   "World":"Мир"
 };

 function PhraseError(message) {
     this.message=message;
     Error.captureStackTrace(this,PhraseError);
 }
 util.inherits(PhraseError,Error);
 PhraseError.prototype.name='PhraseError';
 function HttpError(error,text) {
     this.status=error;
     this.message=text;
     Error.captureStackTrace(this,HttpError);
 }
util.inherits(HttpError,Error);
HttpError.prototype.name='HttpError';
function getPhrase(name) {
    if(!phrases[name]){
        throw new PhraseError("No such phrase"+name);
    }
    return phrases[name];
}
function makePage(url) {
    if(url != 'index.html'){
        throw new HttpError(404,"Page doen't exist");
    }
    return util.format("%s, %s!",getPhrase("******"),getPhrase("World"));
}

try {
    var page = makePage('index.html');
    console.log(page);
}
catch (e){
     if (e instanceof HttpError){
         console.log(e.status,e.message);
     }
     else {
         console.error('Error %s\n message: %s\n stack: %s',e.name,e.message,e.stack);
     }
}