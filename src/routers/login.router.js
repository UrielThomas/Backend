import { Router } from "express";
import userModel from "../models/user.model.js";


const router = Router()

router.get('/',async(req,res)=>{
    console.log('connected')
    res.render('login')
})


router.post('/',async(req,res)=>{

    const checkUser = req.session.user
    const checkPassword = req.session.password
    console.log(req.session)

    const loginUser = req.body.user
    const loginPassword = req.body.password
    console.log(loginUser,loginPassword)

    if(loginUser === checkUser && loginPassword === checkPassword){
        res.send('logged in')
        res.redirect('/api/products')
    }else{
        res.send("invalid user or password")
    }


    

})


router.get('/logout',async(req,res)=>{
    req.session.destroy(err=>console.log(err))
    res.send('session ended')
})


export default router