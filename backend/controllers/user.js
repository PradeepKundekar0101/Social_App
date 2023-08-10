import user from "../models/User.js";
export const getUser = async (req,res)=>{
    const userID= req.params.id;
    try {
        const userFound = await user.findById(userID);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json(error);
    } 
}
export const getFriends = async(req,res)=>{
    const userID = req.params.id;
    try {
        const userFound = await user.findById(userID);
        let friends = [];
        const friendIdArray = userFound.friends;
        friendIdArray.forEach( async (friendId) => {
            const friendFound = await user.findById(friendId);
            friends.push(friendFound);
        });
        res.status(200).json(friends);
    } catch (error) {
        res.status(404).json(error);
    } 

}
export const addRemoveFriend = async(req,res)=>{
    const userId = req.params.id;
    const friendId = req.params.friendID;
    try {
        const userFound = await user.findById(userId);
        const friendFound = await user.findById(friendId);
        
        if(userFound.friends.includes(friendFound))
        {
            //Remove Friend from user and remove user from friend
            userFound.friends = userFound.friends.filter((e)=>{return e!==friendId});
            friendFound.friends = friendFound.friends.filter((e)=>{ return e!==userId});
        }
        else{
            userFound.friends.push(friendId);
            friendFound.friends.push(userId);
        }
        let friends = [];
        const friendIdArray = userFound.friends;
        friendIdArray.forEach( async (friendId) => {
            const friendFound = await user.findById(friendId);
            friends.push(friendFound);
        });
        res.status(200).json(friends);

    } catch (error) {
        res.status(404).json(error);
    }

}