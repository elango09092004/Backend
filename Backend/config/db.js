const mongoose = require("mongoose")

const url = "mongodb://localhost:27017/monkeytype"
try {
    mongoose.connect(
        url
        
    )
} catch (e) {
    console.log("could not connect");
}
const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));



