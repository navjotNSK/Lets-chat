 const express = require("express");
 const dotenv = require("dotenv");
 const chats = require("./data/data")

 const app =express();
 dotenv.config(); 
 const PORT  = process.env.PORT || 3001 ;

 app.listen(PORT , console.log(`Running on ${PORT}`));

 app.get("/api/chat",(req,res)=>{
    print("running");
 res.send(chats);
 });

 app.get("/api/chat/:id",(req,res)=>{
    print("running");
    res.send(chats.find((c)=>c._id === req.params.id ));
 });

 const print = (number) => console.log(number); 


