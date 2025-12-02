const express=require("express")
const authRoutes = require("../routes/authRoutes.js")
const postRoutes = require("../routes/postRoutes.js")
const app=express()
app.use(express.json())
app.use("/api", authRoutes)
app.use("/api", postRoutes)
const PORT=8000
app.listen(PORT,()=>{
    console.log(`server run on http://localhost:${PORT}`);
    
})