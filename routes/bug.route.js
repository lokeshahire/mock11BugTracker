const express = require("express");
const bcrypt = require("bcrypt");
const Bug = require("../models/bug.model");

const bugRoute = express.Router();

bugRoute.get("/", async (req, res) => {
    let data = await Bug.find();
    res.send(data);
})


bugRoute.get("/:id", async (req, res) => {

    let { id } = req.params;

    try {
        let bug = await Bug.findById(id)
        res.status(200).send(bug)

    } catch (error) {
        console.log(error);
        res.status(401).send(error.message)
    }
})


module.exports = bugRoute;