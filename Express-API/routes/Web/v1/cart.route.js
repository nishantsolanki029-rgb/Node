const express = require("express");
const router = express.Router();
const userMiddleware = require("../../../middleware/user.middleware");
const cartController = require("../../../controllers/cart.controller");

// add items
router.post("/add", userMiddleware.authUser, cartController.AddToCart);


// get all items 


//remove items




module.exports = router;