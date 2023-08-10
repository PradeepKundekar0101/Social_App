import post from "../models/Post.js";
import user from "../models/User.js";


//CREATE
export const createPost = async(req,res)=>{
    const {userId,description,location,picture} = req.body;
    try {
        const userFound = await user.findById(userId);
        const newPost = new post({
            userId,
            firstName:userFound.firstName,
            lastName:userFound.lastName,
            userPicture:userFound.picturePath,
            description,
            location,
            picture,
            likes:{},
            comments:[]
        });
        const savedPost = await newPost.save();
        const allPosts= await post.find();
        res.status(200).json(allPosts);
    } catch (error) {
        res.status(500).json(error);        
    }
}

// READ
export const getAllFeeds = async (req,res)=>
{
    try
    {
        const allPost = await post.find();
        res.status(200).json(allPost);   
    }catch (error) {
        res.status(500).json(error);
    }   
}

export const getUserPosts = async (req,res)=>
{
    const userId = req.params.id;
    try {
        const postFound = await post.find({user:userId});
        res.status(200).json(postFound);

    } catch (error) {
        res.status(500).json(error);
    }   
}

// UPDATE
export const likePost = async (req,res)=>
{
    try {
        const postId= req.params.id;
        const userId = req.user;
        const postFound = await post.findById(postId);
        const userLiked = postFound.likes.get(userId);
        if(userLiked)
            postFound.likes.delete(userId);
        else 
            postFound.like.set(userId,true);
        const updatedPost = await post.findByIdAndUpdate(postId,{
            likes:postFound.likes
        },{
            new:true
        })
    } catch (error) {
        res.status(500).json(error);
    }   
}