import mongoose from "mongoose";
const PostSchema = mongoose.Schema({
    userId:{
        required:true,
        type:String
    },
    firstName:{
        required:true,
        type:String
    },
    lastName:{
        required:true,
        type:String
    },
    userPicture:{
        required:true,
        type:String
    },
    location:String,
    
    description:{
        type:String,
        min:10,
        max:250,
    },
    picture:{
        type:String,
        default:""
    },
    likes:{
        type:Map,
        of:Boolean
    },
    comments:{
        type:Array,
        default:[]
    }
});

const post = mongoose.model("post",PostSchema);
export default post;