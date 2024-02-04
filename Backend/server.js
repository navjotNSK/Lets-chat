 const express = require("express");

 const app =express();
 app.listen(8080 , console.log("Running on 8080"));

 app.get("/",(req,res)=>{
    print("running");
 res.send("API is running");
 });

 const print = (number) => console.log(number); 


