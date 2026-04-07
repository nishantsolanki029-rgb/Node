const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const userModel = require("./Models/user.model");
const bcrypt = require("bcrypt");
// server memory temporary
// user ni req server pase jai tyare ne, user kon chhe te khabar hoti nathi, mate darek req sathe user ne authorize karvo pade 
// ex. login req --> server ne khabar nathi hoti user kon chhe  
// cookie parser ==> server token browser storage
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get(cookieParser());

app.get("/", (req,res) => {
    res.cookie("username", "test@user");
    res.send("Server Homepage");
});

// data --> convert jwt --> save cookie
app.get("/jwt", (req, res)=>{
    let data = {username: "tset", email: "text@gmail.com", role: "admin"};

    let token = jwt.sign(data, "abcde");
    console.log(token);
    res.cookie("token", token);
    res.send("go to application and chek your cookie storage ")
})

// signup
app.get("/signup", async (req,res) => {
    let createuser = await userModel.create({
        username: "test_user",
        email: "tset@user.com",
        password: "test123",
    });
    res.send(createuser);
});

// for encrypt your password use --> bcrypt package
// use case: when your data leack your passwork is safe, if you ecrypt your all user password
// encrypt password stages:
// your password + salt (default random 10 char) => create a hash
// in database we save hash not password
app.get("/hash", (req, res) =>{
    let password = "abc@123"
    // bcrypt.hash("password", "number", (err, hash) => {})                                           
    bcrypt.hash(password, 10, (err, hash) => {
        console.log(hash);
        res.send(hash);
    });                                           
});
// login --> pasword compare (user system)



app.listen(3000, () => {
    console.log("server is Running")
});