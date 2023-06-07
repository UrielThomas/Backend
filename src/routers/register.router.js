import { Router } from "express";
import userModel from "../models/user.model.js";
import mongoose from "mongoose";
import { createHash } from "../utilis.js";
import passport from "passport";


const router = Router()

router.get('/', async (req, res) => {
    res.render('register')
})

router.post('/', 
passport.authenticate('register',{failureRedirect:'/failureRegister'}),
async (req, res) => {
    res.redirect('/')

})


router.get('/failureRegister',async(req,res)=>{
    res.send({error:"failed to register"})
})

export default router