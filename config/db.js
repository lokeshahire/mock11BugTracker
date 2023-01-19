// let mongoose = require("mongoose")
// mongoose.set('strictQuery', false);
// let connect = async () => {
//     return mongoose.connect("mongodb://localhost:27017/bugTracker")
// }
//  mongosh "mongodb+srv://cluster0.znhlafq.mongodb.net/myFirstDatabase" --apiVersion 1 --username lokeshahire
// mongodb+srv://lokeshahire:Aai@1996@cluster0.znhlafq.mongodb.net/bugTracker?retryWrites=true&w=majority
// module.exports = connect


const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
require("dotenv").config();
const dbConnect = mongoose
    .connect("mongodb+srv://lokeshahire:Aai%401996@cluster0.znhlafq.mongodb.net/bugTracker")
    .then(() => console.log("connected to db"))
    .catch((e) => console.log("error:", e));
module.exports = dbConnect;

// const mongoose = require("mongoose");
// mongoose.set('strictQuery', false);
// const dbConnect = () => {
//     return mongoose.connect("mongodb+srv://lokeshahire:Aai%401996@cluster0.znhlafq.mongodb.net/bugTracker").catch((e) => {
//         console.log(e.message)
//     })
// }

// module.exports = dbConnect;