import { Router } from "express";
import userModel from "../models/user.model.js";
import { createHash, isValidPassword } from "../utilis.js";

const router = Router()

router.get('/', async (req, res) => {
    console.log('connected')
    res.render('login')
})


router.post('/', async (req, res) => {
    
    // const checkUser = req.session.user
    // const checkPassword = req.session.password
    // const loginUser = req.body.user
    // const loginPassword = req.body.password
    // console.log(loginUser, loginPassword)
    // if(loginUser === checkUser && loginPassword === checkPassword){
    //     console.log('logged in')
    //     res.redirect('/api/products')
    // }else{
    //     res.send("invalid user or password")
    // }
    /////////////////////////////////////LOGIN FOR SESSIONS
    const findUser = req.body.user
    const findPassword = req.body.password

    console.log(findUser)
    console.log(findPassword)
    const user = await userModel.findOne({user:findUser}).lean().exec()
    console.log(user)

    if (!user) {
        return res.status(401).json({ status: 'error', error: "user not found" })
    } else {

        if (!isValidPassword(user, findPassword)) {
            return res.status(403).json({ status: "error", error: 'incorrect password' })
        }
        console.log('logged in')
        res.redirect('/api/products')
    }

    ////////////////LOGIN FOR DB


})


router.get('/logout', async (req, res) => {
    req.session.destroy(err => console.log(err))
    res.send('session ended')
})


export default router