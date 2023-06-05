import { Router } from "express";



const router = Router()

router.get('/',async(req,res)=>{
    res.render('register')
})

router.post('/',async(req,res)=>{
    const userName = req.body.user
    req.session.user = userName
    const password = req.body.password
    req.session.password = password
    const email = req.body.email
    req.session.email = email
    res.redirect('/')
    console.log(req.session)
})

export default router