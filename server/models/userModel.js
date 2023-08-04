import mongoose from "mongoose";


const user = new mongoose.Schema(
  {
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    username: { type: String, required: true },
    age: { type: Number, required: true },
    mobile: { type: Number, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { collection: "user-data" }
);

 export const Users = mongoose.model("UserData", user);


