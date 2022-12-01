const express = require("express");
const mongoose = require("mongoose");
const app = express();
require('dotenv').config();
const pinRoute = require("./routes/Pins");

app.use(express.json());

mongoose.connect(process.env.MOnGO_URL).then(() => {
    console.log("mongodb connected");
}).catch((err)=> {
    console.log(err);
});
app.use("/api/pins" , pinRoute)
app.listen(8800 , () => {
    console.log("backend server is running");
})