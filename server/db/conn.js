
import mongoose from 'mongoose'

function dbConnect(CONNECTION_URL) {
    mongoose.connect(CONNECTION_URL,{useNewUrlParser : true,useUnifiedTopology : true})
    .then((res) =>  {
        console.log("connection successfull");

    })
    .catch((error) =>  {
        console.log(error);
    })
}

export default dbConnect;


