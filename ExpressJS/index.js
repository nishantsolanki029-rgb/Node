// create a express server

// package.json ==> type = module ==> import
// package.json ==> type = commonjs ==> const, require

const express = require("express");
const path = require("path");

const app = express();

// Middleware ==> Middle was run before route, call before function 
// usecase : Authorization, Authentication, Validation, Error
// user req ---> server
// (server req) server res ---> user
// with middleware : user req --> middleware(server) --> server route
app.use(function(req, res, next){
    console.log("Middleware is Running 🏃‍♂️")
    next()
})
// login req --> middleware (check user into database) --> server route (profile)


// create a route 
app.get("/",function(req, res){
    res.send("Welcome to ExpressJS !");
} )

app.get('/profile', function(req, res)  {
    res.send("Show Profile 📃");
})

app.get('/signup', function(req, res)  {
    res.send("Create Your Account");
})

app.get('/login', function(req, res)  {
    const dirPath =  path.resolve();
    const FilePath = path.join(dirPath, "pages", 'login.html')
    res.sendFile(FilePath);
})

// error handling :
// last listed route.
// awlays write after all route because it will catch all the errors that are not handled by the previous routes
app.use(function(req, res){
    res.status(404).send("Page Not Found 🚫");
    res.status(500).send("Somthing went Wrong 😑");
})

app.listen(3000, ()=>{
    console.log("Server is Running 🏃‍♂️");
})