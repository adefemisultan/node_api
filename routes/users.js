import express from 'express';

import { getUsers, updateUser, deleteUser, addUser, getUserById } from '../controllers/users.js';

const router = express.Router();

// all routes in here are starting with /users
router.get('/', getUsers);

router.post('/', addUser);

router.get('/:id', getUserById);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;