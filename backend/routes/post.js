import express  from "express";
import { verifyToken } from "../middleware/auth.js";
import {
    getAllFeeds,getUserPosts,likePost
}
from '../controllers/post.js'
const router = express();

// READ
router.get('/',verifyToken,getAllFeeds);
router.get('/:id',verifyToken,getUserPosts);

//UPDATE
router.patch('/:id/like',verifyToken,likePost);

export default router;
