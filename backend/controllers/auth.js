import jwt from "jsonwebtoken";
import  bcrypt from 'bcrypt';
import user from "../models/User.js";
const SECRET_KEY = process.env.JWT_SECRET;

//  REGISTER
export const register = async (req,res)=>{
    
    const {firstname,lastname,password,email,phonenumber,location,occupation} = req.body;
    const picture = req.file.filename;
    try {
        const hashPass = await bcrypt.hash(password,10);
        const newuser = new user({
            firstname,lastname,password:hashPass,email,phonenumber,location,occupation,picture,
            view: Math.floor(Math.random()*1000),
            impression:Math.floor(Math.random()*1000)
        });
        const save = await newuser.save();
        res.status(201).json(save);
    } catch (error) {
        res.status(500).json(error);
    }
}

//LOGIN
export const login = async (req,res)=>{
    const {email,password} = req.body;
    try {
        const userFound = await user.findOne({email});
        if(!userFound) return res.status(404).json({"message":"Invalid Credentials"});
        const passwordMatch = await bcrypt.compare(password,userFound.password);
        if(passwordMatch)
        {
            const token = jwt.sign({userFound}, process.env.PORT);
            return res.status(200).json({token,userFound});
        }
        return res.status(404).json({"message":"Invalid Credentials"});
    } catch (error) {
        res.status(500).json(error);
    }
}