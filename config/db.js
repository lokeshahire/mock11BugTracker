

// const mongoose = require("mongoose");
// mongoose.set('strictQuery', false);
// require("dotenv").config();
// const dbConnect = mongoose
//     .connect("mongodb+srv://lokeshahire:Aai%401996@cluster0.znhlafq.mongodb.net/bugTracker")
//     .then(() => console.log("connected to db"))
//     .catch((e) => console.log("error:", e));
// module.exports = dbConnect;



const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const connect = () => {
    return mongoose.connect(
        "mongodb+srv://lokeshahire:Aai%401996@cluster0.znhlafq.mongodb.net/bugTracker?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        (err) => {
            if (err) {
                console.log("error in connection");
            } else {
                console.log("mongodb is connected");
            }
        }
    );
};

module.exports = connect;