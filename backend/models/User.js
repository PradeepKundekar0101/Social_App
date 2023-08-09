import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    firstname:{
        type:String,
        require:true,
        min:2,
        max:50,
    },
    lastname:{
        type:String,
        require:true,
        min:2,
        max:50,
    },
    email:{
        type:String,
        require:true,
        min:2,
        max:50,
        unique:true
    },
    password:{
        type:String,
        require:true,
        min:8,
    },
    phone:{
        type:Number,
        require:true,
        min:10,
        max:10,
    },
    picturePath:{
        type: String,
        default:"",
    },
    friends:{
        type: Array,
        default:[],
    },
    location:{
        type:String,
        min:3
    },
    occupation:{
        type:String,
        min:3,
    },
    views:{
        type:Number,
        default:0
    },
    impression:{
        type:Number,
        default:0
    }
});

const user = new mongoose.model("user",UserSchema);
export default user;