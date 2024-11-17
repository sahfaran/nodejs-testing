
const express = require("express")
const router = express.Router()
const UserController = require("../controller/userController")


router.post('/register', (req,res) => {
    console.log("register page")
    res.json({ message: "register page done"})
} )

module.exports = {
    router
};