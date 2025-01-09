const express = require('express');
//imported the expressjs module as dependancy
const app = express(); //this is instance of express.js
//this initialises express.js in order to be used for different functionalities



// app.method("path", handlerfunction);

// amazon.com/
//root route
app.get("/", (req, res)=>{
    // req.body.name="John"; request is the data that is sent FROM THE CLIENT TO THE SERVER
    // res.send("Hello World"); response is the data that is sent FROM THE SERVER TO THE CLIENT
    res.send("Hello World");
});

app.get("/about", (req, res)=>{
    res.send("This is the about page");
})

//PORT LISTENER -> 

app.listen(8080, ()=>{
    console.log("Server is running on port 8080");
})