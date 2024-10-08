const express = require('express');
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const UserRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")
const stripeRoute = require("./routes/strip")
const cors = require("cors")

dotenv.config()

mongoose.connect("mongodb://localhost:27017/E-commerceShop").then(()=>console.log("mongodb connected"))
.catch((err)=>console.log(err))

app.use(cors());
app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/users", UserRoute)
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);



app.listen(process.env.PORT || 5000, ()=>console.log("backend server is running"))