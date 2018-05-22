process.env.NODE_ENV = process.env.NODE_ENV || "DEV";
if (process.env.NODE_ENV === "DEV") {
  require("dotenv").config();
}

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
/* mongoose.connect(process.env.DB_URI).then(() => console.log("DB CONNECTED"))*/

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const helloWorldRoute = require("./routes/HelloWorldRoute");

app.use("/home", helloWorldRoute);

const port = process.env.PORT;
app.listen(port, () => console.log(`App running on port ${port}`));
