// const { Schema, model } = require("mongoose");
// const mongoose = require("mongoose")
// const { ObjectId } = mongoose.Schema.Types

// const bugSchema = new Schema({
//     title: { type: String, required: true },
//     priority: { type: Boolean, required: true },
//     createdBy: { type: ObjectId, ref: "user" }

// })
// const Bug = model("bug", bugSchema)
// module.exports = Bug

const mongoose = require("mongoose");
const BugSchema = new mongoose.Schema({
    title: { type: String, required: true },
    priority: { type: Boolean, required: true },
}, { timestamps: true })

const Bug = mongoose.model("Bug", BugSchema);

module.exports = Bug;