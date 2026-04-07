const express = require("express");
const app = express();
// server memory temporary
// user ni req server pase jai tyare ne, user kon chhe te khabar hoti nathi
// user ni req server pase jai tyare server 
// ex. login req --> server ne khabar nathi hoti user kon chhe  
const cookieParser = require("cookie-parser");

app.use(express.json())
app.use(express.urlencoded({extended: true}));


app.get("/", (req,res) => {
    res.send("Server Homepage");
});

app.listen(3000, () => {
    console.log("server is Running")
});