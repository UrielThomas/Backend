import { Router } from "express";
import userModel from "../models/user.model.js";
import mongoose from "mongoose";

const router = Router()

router.get('/', async (req, res) => {
    res.render('register')
})

router.post('/', async (req, res) => {
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
        res.redirect('/')
        console.log(req.session)

    const newUser = await userModel.create([{
        user: userName,
        password: password,
        email: email,
        authorization: auth
    }])

    console.log(newUser)



})

export default router