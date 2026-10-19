//import express from "express";
//var express = require("express");
//var app = express();
import app from "./server/express.js";
import router from "./server/assets-router.js";



import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import contactRouter from "./routes/contact.routes.js";
import qualificationRouter from "./routes/qualification.routes.js";
import projectRouter from "./routes/project.routes.js";
import userRouter from "./routes/user.routes.js";


import dotenv from "dotenv";

dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/api/contacts", contactRouter);
app.use("/api/qualifications", qualificationRouter);
app.use("/api/projects", projectRouter);
app.use("/api/users", userRouter);


//const assetsRouter = require("./server/assets-router");
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to My Portfolio application."
  });
});

//module.exports = app;



const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB database connected successfully');
    app.listen(PORT, () => console.log(`App running in port ${PORT}`));
  })
  .catch(err => console.log('MongoDB connection failed:', err.message));


export default app;

