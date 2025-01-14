// all the logging middlewares i have in my project

 

//Logging middleware
const loggingMW = (req, res, next)=>{
    const time = new Date().toTimeString();
    console.log("Time: ", time, "Method:", req.method, ",Path:\"", req.path, "\"");
    // once the mw is executed successfully the next function is called which lets the request to move to the next function
    next();
};


export default loggingMW;