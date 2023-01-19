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

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = mongoose.model("user", userSchema);

module.exports = User;