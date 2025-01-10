// const express = require('express');
import express from "express";
//imported the expressjs module as dependancy
const app = express(); //this is instance of express.js
//this initialises express.js in order to be used for different functionalities

//this is for parsing json files from the requests
app.use(express.json());

//middleware for urlencoded data
// app.use(urlencoded({extended:true}));
// amazon.com/products?name:John&age=20


//Logging middleware
app.use((req, res, next)=>{
    const time = new Date().toTimeString();
    console.log("Time: ", time, "Method:", req.method, ",Path:\"", req.path, "\"");
    // once the mw is executed successfully the next function is called which lets the request to move to the next function
    next();
})
// app.method("path", handlerfunction);

// amazon.com/
//root route
app.get("/", (req, res)=>{
    //object.property
    // req.body.property="John"; request is the data that is sent FROM THE CLIENT TO THE SERVER
    // res.send("Hello World"); response is the data that is sent FROM THE SERVER TO THE CLIENT
    res.send("Hello World");
});
//dynamic routing
//Route Parameters
app.get("/meet/:id", (req, res)=>{
    const id = req.params.id;
    res.send(`Hello ${id}`);
});

//Query Parameters
//those parameters that we write after the ? in the url 
//these are used for querying the data from the server
app.get("/watch", (req, res)=>{
    //query with the value v
    const v = req.query.v;

    //search the databse for the video with the id v

    //send the video to the client
    res.send(`Watching video ${v}`);
})

app.post("/", (req, res)=>{
    console.log(req.body);
    res.send("Data Recieved");
})

app.get("/about", (req, res)=>{
    res.send("This is the about page");
})

//PORT LISTENER -> 
const port = 8000;
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})