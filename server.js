//import express from "express";
//var express = require("express");
//var app = express();
import app from "./server/express.js";
import router from "./server/assets-router.js";



import mongoose from "mongoose";
import cors from "cors";
import express from "express";


import dotenv from "dotenv";

dotenv.config();


//const assetsRouter = require("./server/assets-router");
app.use("/src", router);
app.use("/", function (req, res) {
 res.send("Welcome to User application");
});

//module.exports = app;

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB database connected successfully');
    app.listen(PORT, () => console.log(`App running in port ${PORT}`));
  })
  .catch(err => console.log('MongoDB connection failed:', err.message));


export default app;

