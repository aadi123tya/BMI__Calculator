

var express = require("express");


var app = express();
var body = require("body-parser");
app.use(body.urlencoded({extended:true}))

app.get("/",function(req , res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});



app.post("/",function(req,res){
    console.log(req.body);
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var result = n1/n2 ;
    res.send("your bmi index is " +  result);
});



app.listen(3000,function(){
    console.log("your server are started ");
});
