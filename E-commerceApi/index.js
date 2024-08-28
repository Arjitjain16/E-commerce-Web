const express = require('express');
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const UserRoute = require("./routes/user")
const authRoute = require("./routes/auth")

dotenv.config()

mongoose.connect("mongodb://localhost:27017/E-commerceShop").then(()=>console.log("mongodb connected"))
.catch((err)=>console.log(err))

app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/users", UserRoute)


app.listen(process.env.PORT || 5000, ()=>console.log("backend server is running"))