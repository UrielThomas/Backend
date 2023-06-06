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
passport.authenticate('register',{failureRedirect:'/errors/failureRegister'}),
async (req, res) => {
    let userName
    const password = req.body.password
    const email = req.body.email
    let auth
    if (email === 'adminCoder@coder.com' && password === 'adminCod3r123') {
        userName = 'CoderAdmin'
        auth = true
    } else {
        auth = false
        userName = req.body.user
    }
    req.session.user = userName
    req.session.password = password
    req.session.email = email
    req.session.auth = auth
    // console.log(req.session)
    req.body.auth = auth
    req.body.password=createHash(req.body.password)         //HASHING THE PASSWORD
    // console.log(req.body.password)
    const newUser = req.body
    const user = new userModel(newUser)
    await user.save()
    res.redirect('/')
    console.log(newUser)



})

export default router