const express = require("express");
const Bug = require("../models/bug.model");
const User = require("../models/user.model");
const router = express.Router();

module.exports.getBug = async (req, res) => {
    Bug.find({ createdBy: req.user._id })
        .then((r) => {
            res.json(r);
        })
        .catch((e) => console.log(e));
};
module.exports.createBug = async (req, res) => {
    const { title, priority } = req.body;

    const bug = await Bug.create({ ...req.body, createdBy: req.user });
    const updatedUser = await User.updateOne(
        { _id: req.user._id },
        { $push: { bug: bug._id } }
    );
    return res.json(bug);
};
module.exports.updateBug = async function (req, res) {
    try {
        const bugId = req.params.id;
        const { title, priority } = req.body;
        const updateBug = await Bug.findByIdAndUpdate(bugId, {
            title: title,
            priority: priority,
        });
        return res.status(200).json(updateBug);
    } catch (error) {
        next(error);
    }
};
// module.exports.markBug = async function (req, res) {
//     try {
//         const bugId = req.params.id;

//         const updatedBug = await Bug.findByIdAndUpdate(bugId, {
//             status: true,
//         });
//         return res.status(200).json(updatedBug);
//     } catch (error) {
//         next(error);
//     }
// };
module.exports.deleteBug = async (req, res, next) => {
    try {
        const bugId = req.params.id;
        const deleteBug = await Bug.findByIdAndDelete(bugId);
        return res.status(200).json({
            msg: "Deleted",
        });
    } catch (error) {
        next(error);
    }
};