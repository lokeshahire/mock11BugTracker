const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const userRoute = express.Router();
const sceretkey = "qwertyuiop"


userRoute.post("/", async (req, res) => {
    const { username, password } = req.body;
    //  console.log(email, password, "h0")
    try {
        if (username && password) {
            let user = await User.findOne({ email: email });
            const result = await bcrypt.compare(password, user.password);
            if (user.username && result) {
                let token = jwtToken(email, user._id)

                res.send({
                    token: token
                });
            } else {
                res.status(400).send("Wrong Credntial")
            }
        }
        else {
            console.log("done")
            res.status(400).send("User Doesn't Exist")
        }
    }
    catch (e) {
        res.status(500).send(e.message)
    }
})


module.exports = userRoute;


const jwtToken = (username, id) => {
    let token = jwt.sign({ username: username, id: id }, sceretkey, {
        expiresIn: "24 hours"
    })
    return token
}