var express = require("express");
var server = express();
server.get("/", (req,res, next) =>{
    console.log("someone get menu");
    res.send("menu: what do you want? food or water");
})
server.get("/water",(req,res,next) =>{
    console.log("someone get water");
    res.send("Here is water");
})
server.get("/food", (req,res,next) =>{
    console.log("someone get food");
    res.send("here is food")
})
server.listen(3000,() =>{
    console.log("server is running on port 3000");
})