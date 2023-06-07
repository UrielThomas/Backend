import { Router } from "express";
import userModel from "../models/user.model.js";
import { createHash, isValidPassword } from "../utilis.js";
import passport from "passport";

const router = Router()

router.get('/', async (req, res) => {
    console.log('connected')
    res.render('login')
})


router.post('/', 
passport.authenticate('login',{failureRedirect:'/failureLogin'}),
async (req, res) => {
    
    if(!req.user){
        return res.status(400).send({status:error,error:'Invalid credentials'})
    }
    req.session.user = {
        user : req.user.user,
        email : req.user.email
    }
    console.log(req.session)

        res.redirect('/api/products')

})


router.get('/failureLogin',(req,res)=>{res.send({error:'Failed to log in'})})


router.get('/logout', async (req, res) => {
    req.session.destroy(err => console.log(err))
    res.send('session ended')
})


export default router