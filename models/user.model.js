// const { Schema, model } = require("mongoose");
// const mongoose = require("mongoose")
// const { ObjectId } = mongoose.Schema.Types
// const userSchema = new Schema({
//     // name: { type: String, required: true },
//     username: { type: String, required: true },
//     password: { type: String, required: true },
//     // todos: [{ type: ObjectId, ref: "todo" }],
// })
// const User = model("user", userSchema)
// module.exports = User

const mongoose = require("mongoose");

const useSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
}, { timestamps: true })

const User = mongoose.model("User", useSchema);

module.exports = User;