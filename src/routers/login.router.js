import { Router } from "express";



const router = Router()

router.get('/',async(req,res)=>{
    console.log('connected')
    res.render('login')
})


router.post('/',async(req,res)=>{

    // const checkUser = req.session.user
    // const checkPassword = req.session.password
    console.log(req.session)

    const loginUser = req.body.user
    const loginPassword = req.body.password
    console.log(loginUser,loginPassword)
    res.send('logged in')
    // res.redirect('/api/products')

})

export default router