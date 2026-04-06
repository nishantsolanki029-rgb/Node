const express = require("express");
const app = express();
const userModel = require("./model/user.model");

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("Server Homepage");
});

app.listen(3000, () => {
    console.log("Server is running 🏃‍♂️")
});  

// CRUD
// Create
app.get("/create",async (req, res)=>{
 let createdUser = await userModel.create({
    username: 'test 3',
    name: 'test3 user',
    email: "test3@gmail.com"
 })
 res.send(createdUser);
})

// Read
// all user
app.get('/all', async(req, res) =>{
    let allUser = await userModel.find();
    res.send(allUser);
})
// specific user - first only
app.get('/read', async(req, res) =>{
    let user = await userModel.findOne({username: "test 1"});
    res.send(user);
})
//  all user based on  query
app.get('/user', async(req, res) =>{
    let userData = await userModel.find({username: "test 1"});
    res.send(userData);
})

// Update
app.get("/update", async (req, res)=>{
   let updatedUser = await userModel.findOneAndUpdate(
        {username: "test 1"}, // find query --> what is find
        {username: "Coder", email: "coder@developer.com"}, // update query --> what is change
        {new: true}
    );

    res.send(updatedUser);
})

// Delete
app.get("/delete", async (req, res)=>{
    await userModel.findOneAndDelete({username: "Coder"});
    res.redirect("/all");
});
