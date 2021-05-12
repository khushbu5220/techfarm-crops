const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/crops-api", {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("****************************Mongodb Connected****************************");
}).catch((e) =>{
    console.log("No connection");
})