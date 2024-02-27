const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const routes = require('./routes/ToDoRouter');

const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json())   //parse the body in json
app.use(cors())    //cors origin request will be handled
app.use(express.urlencoded({ extended: false })); 

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB Connected"))
.catch((error) => console.log("Error: ", error));

app.use("/api", routes);

app.listen(PORT, () => console.log(`Listening at ${PORT}...`));

