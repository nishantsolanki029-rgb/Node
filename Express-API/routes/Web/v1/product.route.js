// Product Creation
// Product Read Single and All
// Product Update
// Product Delete

const express = require("express")
const userMiddleware = require("../../../middleware/user.middleware")
const adminMiddleware = require("../../../middleware/admin.middleware")
const productController = require("../../../controllers/product.controller")
const router = express.Router()

// create product
router.post("/add", userMiddleware.authUser, adminMiddleware.authAdmin, productController.createProduct)
// authUser ==> Check User Login or Not? ==> If Login then --> req.user (give you back)
// authAdmin ==> req.user ==> Check Role ==> Admin or Not? --> Jump to Next Router

// all product
router.get("/all", userMiddleware.authUser, productController.allProduct)

// single product
router.get("/:id", userMiddleware.authUser, productController.singleProduct)

// update product
router.put("/:id", userMiddleware.authUser, adminMiddleware.authAdmin, productController.updateProduct)

// delete product
router.delete("/:id", userMiddleware.authUser, adminMiddleware.authAdmin, productController.deleteProduct)

module.exports = router