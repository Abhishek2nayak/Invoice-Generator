import { response } from "express";
import { Users } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });

const secret_key = process.env.JWT_SECRET_KEY;
console.log(secret_key);

//function for registration new user

export const setUser = async (req, res) => {
  const { fname, lname, username, age, mobile, email, password } = req.body;

  if (!fname || !lname || !username || !age || !mobile || !email || !password) {
    return res.status(422).json({ error: "Fill the field first" });
  }

  try {
    //checking existing user

    const existing_username = await Users.findOne({ username });

    if (existing_username) {
      return res.status(400).json({ message: "Username already present" });
    }

    const existing_user = await Users.findOne({ email });
    console.log(existing_user);
    if (existing_user) {
      return res.status(400).json({ message: "email already present" });
    }

    //  hash the password

    const hashedPassword = await bcrypt.hash(password, 10);

    // creating new user
    const new_user = new Users({
      fname,
      lname,
      username,
      age,
      mobile,
      email,
      password: hashedPassword,
    });

    //save the new user
    await new_user.save();

    return res.status(201).json({ message: "User registered successfully." });
  } catch (err) {
    console.log("console error : ", err);
    return res.status(500).json({ error: "Internal server error. " });
  }
};

//for login new user

export const getUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "Fill the field first" });
  }

  // checking for email
  try {
    const user = await Users.findOne({ email: email });
    if (!user) {
      return res.status(401).json({ message: "Invalid Credential" });
    }

    console.log(user.password);

    // compare password with hashed password

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid Credential" });
    }
    //generate jwt token for session
    const token = jwt.sign({ userId: user._id }, secret_key, {
      expiresIn: "1h",
    });
    return res.status(201).json({ token });
  } catch (err) {
    console.log("console error : ", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
