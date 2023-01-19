const express = require("express");
const dbConnect = require("./config/db");
// const userRoute = require("./routes/User.routes");
// const signUpRoute = require("./routes/Signup.routes");

const cors = require("cors");
const userRoute = require("./routes/user.route");
const signUpRoute = require("./routes/signup.route");
const bugRoute = require("./routes/bug.route");
// const bugRoute = require("./routes/bug.route");

const app = express();
require('dotenv').config();
const PORT = 8000;


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/login", userRoute);
app.use("/signup", signUpRoute);
app.use("/bug", bugRoute);


app.get("/", (req, res) => {
    res.send("Welcome");
});


app.listen(8000, async () => {
    await dbConnect;
    console.log(`Server started on 8000`);
});