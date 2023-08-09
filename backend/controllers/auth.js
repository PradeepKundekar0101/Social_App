import jwt from "jsonwebtoken";
import  bycrypt from 'bcrypt';
import user from "../models/User.js";
const JWT_SECRET = process.env.JWT_SECRET;

//  REGISTER
export const register = async (req,res)=>{
    const {firstname,lastname,password,email,phonenumber,location,occupation,picturePath} = req.body;
    try {
       
        const salt = await bycrypt.genSalt();
        const hashPass = await bycrypt.hash(password,salt);
        const newuser = new user({
            firstname,lastname,hashPass,email,phonenumber,location,occupation,picturePath,
            view: Math.floor(Math.random()*1000),
            impression:Math.floor(Math.random()*1000)
        });
        const save = await newuser.save();
        res.status(201).json(save);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

//LOGIN
export const login = async (req,res)=>{

}