import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";
import TotalIncomesRoute from "./routes/totalIncome.js";
import authRoutes from "./routes/auth.js";
import lesson1 from "./routes/lesson1.js";
import lesson from "./routes/lesson.js";

// import with node Version 12
// const express = require('express')
// const bodyParser = require('body-parser')
// const mongoose = require('mongoose')
// const cors = require('cors')

const app = express();

app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
app.use("/totalIncomes", TotalIncomesRoute);
app.use("/auth", authRoutes);
app.use("/lesson1", lesson1);
app.use("/lesson", lesson);

const CONNECTION_URL =
  "mongodb+srv://financeApp:financeApp123@cluster0.66rmh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Running Port :  ${PORT}`)))
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
