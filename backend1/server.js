const express=require("express")
const authRoutes = require("./routes/auth.route.js")
const dotenv=require("dotenv")
const connectDB = require("./config/db.js")
dotenv.config()

const app=express()
app.use(express.json())
app.use("/api", authRoutes)
// connectDB()
const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`server run on http://localhost:${PORT}`);
    
})