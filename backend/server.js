const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

const classroomRoutes = require("./routes/classroomRoutes");

app.use("/api/classrooms", classroomRoutes);

app.listen(process.env.PORT, ()=>{
  console.log("Server running on port 5000");
});