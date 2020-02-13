const events=require("events");
const eventEmitter=new events();
eventEmitter.on("login", function(email,password){
    if(email=="abc@gmail.com" && password == 12345678){
        console.log("User verified");
}
else{
    console.log("User not verified");
}
});
eventEmitter.on("login",function(email,password){
    if(email=="abc@gmail.com" && password == 1234){
        console.log("Welcome Admin");
}
else{
    console.log("not admin");
}});
eventEmitter.emit("login","abc@gmail.com", 12345678);
eventEmitter.emit("login","abc@gmail.com", 1234);
