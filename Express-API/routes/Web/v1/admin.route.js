const express = require("express");
const router = express.Router();
const middleware = require("../../../middleware/admin.middleware");
const usermiddleware = require("../../../middleware/user.middleware");
const adminController = require("../../../controllers/admin.controller");
const {body} = require("express-validator");

// show all users
// login user --> check user is Admin ? --> show all users
router.get("/all/user", usermiddleware.authUser, middleware.authAdmin, adminController.AllUser)

//delete user
router.delete("/user/:id", usermiddleware.authUser, middleware.authAdmin, adminController.deleteUser)

// Manager Createion
router.post("/manager/create",
    [
    body("username")
        .isLength({ min: 4 })
        .withMessage("Username Must be 4 Characteres Long"),
    body("email")
        .isEmail()
        .withMessage("Enter Valid Email"),
    body("password")
        .isLength({ min: 6 })
        .withMessage("Password Must be 6 Characteres Long"),
    ],
    usermiddleware.authUser, middleware.authAdmin, adminController.regsiterManager)

module.exports = router;