const express = require("express");
const connect = require("./config/db");
const cors = require("cors");
const userRoute = require("./routes/user.route");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/users", userRoute);

app.get("/", (req, res) => {
    res.send("welcome");
});

app.listen(8000, async () => {
    await connect();
    console.log(`listening on http://localhost:8000`);
});