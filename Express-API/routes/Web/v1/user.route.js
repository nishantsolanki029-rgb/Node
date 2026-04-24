const express = require("express")
const { body } = require("express-validator")
const userController = require("../../../controllers/user.controller")
const middleware = require("../../../middleware/user.middleware")

const router = express.Router()

// register user
// second validaiton -- use express validator package
router.post("/register", [
    body("username")
        .isLength({ min: 4 })
        .withMessage("Username Must be 4 Characteres Long"),
    body("email")
        .isEmail()
        .withMessage("Enter Valid Email"),
    body("password")
        .isLength({ min: 6 })
        .withMessage("Password Must be 6 Characteres Long"),
], userController.regsiterUser)

// login user
router.post("/login", [
    body('email').isEmail().withMessage("Enter Valid Email"),
    body("password").isLength({min:6}).withMessage("Passsword Must be 6 Character Long")
], userController.loginUser)

// show profile
router.get("/profile", middleware.authUser, userController.profile)

// logout profile
router.get("/logout", middleware.authUser, userController.logout)

// update profile
router.put("/update", middleware.authUser, userController.updateUser )

// forget password
router.post("/forget-password", userController.forgetPassword);

// reset password
router.post("/reset-password/:token", userController.regsiterUser)

module.exports = router;