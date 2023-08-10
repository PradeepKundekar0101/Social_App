import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import { getUser,getFriends,addRemoveFriend } from '../controllers/user.js';
const router = express.Router();


/* READ Routes */
router.get('/:id',verifyToken,getUser);
router.get('/:id/friends',verifyToken,getFriends);

/* UPDATE Routes */
router.patch('/:id/:friendId',verifyToken,addRemoveFriend);

export default router;