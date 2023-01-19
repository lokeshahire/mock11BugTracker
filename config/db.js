// let mongoose = require("mongoose")
// mongoose.set('strictQuery', false);
// let connect = async () => {
//     return mongoose.connect("mongodb://localhost:27017/bugTracker")
// }

// module.exports = connect


const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
require("dotenv").config();
const connection = mongoose
    .connect("mongodb://localhost:27017/bugTracker")
    .then(() => console.log("connected to db"))
    .catch(() => console.log("error"));
module.exports = connection;