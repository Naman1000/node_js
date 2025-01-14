// const express = require('express');
import express from "express";
//imported the expressjs module as dependancy
const app = express(); //this is instance of express.js
//this initialises express.js in order to be used for different functionalities
import router from "./routes/routes.js";
import loggingMW from "./middleware/log.middleware.js";
//this is for parsing json files from the requests
app.use(express.json());

//middleware for urlencoded data
// app.use(urlencoded({extended:true}));
// amazon.com/products?name:John&age=20

// app.use("/meet", meet);
// app.use("/watch", watch);

app.use(loggingMW);

app.get("/", (req, res)=>{
    //object.property
    // req.body.property="John"; request is the data that is sent FROM THE CLIENT TO THE SERVER
    // res.send("Hello World"); response is the data that is sent FROM THE SERVER TO THE CLIENT
    res.send("Hello World");
});

app.use("/", router);
// this is the router code
// app.method("path", handlerfunction);

// amazon.com/
//root route

//PORT LISTENER -> 
const port = 8000;
app.listen(port, ()=>{
    console.log(`Server is running very nicely ${port}`);
})