const express = require("express");
const router = require("./routes/user.route.js");
const path = require("path");
const bodyParser = require('body-parser')
const methodOverride = require("method-override")
const connectDB = require("./config/db.js");
const userRoutes = require("./routes/user.route.js")
const PORT = 5000;

const app = express();

app.set("view engine", "pug");

app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "static")));

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json());

app.use(methodOverride("_method"))

app.use('/uploads', express.static(path.join(__dirname, "uploads")))

app.use("/", userRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.log("MONGO DB connection failed", error);
})