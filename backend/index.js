const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const pinRoute = require("./routes/Pins");
const userRoute = require("./routes/Users");


const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("mongodb connected");
}).catch((err)=> {
    res.status(500).json(err);
});
app.use("/api/pins" , pinRoute);
app.use("/api/users" , userRoute);
app.listen(8800 , () => {
    console.log("backend server is running");
})