const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.json());

const uri = process.env.ATLAS_URI
console.log(uri)
mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () => console.log("Successfully connected to the datebase"));

const exerciseRouter = require('./routes/exercises');
const userRouter = require("./routes/users")

app.use("/exercises", exerciseRouter);
app.use("/users", userRouter);

app.listen(port, () => {
    console.log('Server is running: ' + port);
})