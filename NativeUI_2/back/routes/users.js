import express from "express";
// import users from "../models/users";
import { register } from '../controllers/users.js'

const router = express.Router()

router.post('/', register)

export default router

