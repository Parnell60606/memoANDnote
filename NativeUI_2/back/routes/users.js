import express from "express";
// import users from "../models/users";

import content from '../middleware/content.js'


import {
    register,
    getUser,
} from '../controllers/users.js'

const router = express.Router()

// router.post('/', content('application/json'), register)
router.post('/', content('application/json'), register)
router.get('/:id', getUser)


export default router

