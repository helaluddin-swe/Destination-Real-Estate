const express=require("express")
const router=express.Router()

router.get("/post",(req,res)=>{
    res.send("works well");
    
})

const postRoutes=router
module.exports=postRoutes