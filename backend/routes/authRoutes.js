const express=require("express")
const { register, login, logout } = require("../controllers/authController.js")
const router=express.Router()
router.post("/auth/register",register)
router.post("/auth/login",login)
router.post("/auth/logout",logout)
const authRoutes=router
module.exports=authRoutes