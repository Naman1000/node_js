
import express from "express";
import meet from "../controllers/route.controller.js";
const router = express.Router();

//dynamic routing
//Route Parameters
// const meet = router.get("/meet/:id", (req, res)=>{
//     const id = req.params.id;
//     res.send(`Hello ${id}`);
// });

router.get("/meet/:id", meet);

router.post("/", (req, res)=>{
    console.log(req.body);
    res.send("Data Recieved");
})

//router lets us write routes code in a seperate file
router.get("/about", (req, res)=>{
    res.send("This is the about page");
})

//Query Parameters
//those parameters that we write after the ? in the url 
//these are used for querying the data from the server
router.get("/watch", (req, res)=>{
    //query with the value v
    const v = req.query.v;

    //search the databse for the video with the id v

    //send the video to the client
    res.send(`Watching video ${v}`);
})




// export default meet;
// or
export default router    //ES6 syntax