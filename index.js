const express = require('express')
const http = require("http");
const { connection } = require("./config/db");
const app = express()

const userRouter = require("./routes/user.route")
const bugRouter = require("./routes/bug.route")
const authRouter = require("./middlewares/auth")
require("dotenv").config();
const cors = require("cors");
const server = http.createServer(app);


app.use(cors());
app.use(express.json());
app.use("/auth", userRouter)
app.use("/bug", authRouter, bugRouter)
app.get("/", (req, res) => {
    res.send("Welcome");
});

server.listen(8000, async () => {
    await connection;
    console.log(`Server started on 8000`);
});