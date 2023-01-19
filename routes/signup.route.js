const express = require("express");
const bcrypt = require("bcrypt");
const signUpRoute = express.Router();
const nodemailer = require("nodemailer");
const User = require("../models/user.model");


const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: 'lokesh@gmail.com',
        pass: 'lokesh'
    }
});



signUpRoute.post("/", async (req, res) => {
    const { username, password } = req.body;
    try {
        let user = await User.findOne({ username: username });
        if (!user) {
            console.log("done")
            let data = new User(req.body);
            data.password = await bcrypt.hash(password, 10)
            await data.save();

            // sendMail(email, name)


            res.send({
                data: data,
                message: "User Register SuccessFully"
            });
            return
        } else {
            res.status(401).send({
                error: "User Already Exist"
            })

        }


    } catch (e) {
        res.send(e.message)
    }

})

module.exports = signUpRoute


