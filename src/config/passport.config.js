import passport from "passport";
import local from "passport-local"
import userModel from "../models/user.model.js";
import { createHash, isValidPassword } from "../utilis.js";

const localStrategy = local.Strategy

const initializePassport=()=>{

    passport.use('register',new localStrategy({
        passReqToCallback: true,
        usernameField:'user'
    },async(req,username,password,done)=>{
        const user = req.body.user
        const email = req.body.email
        try{
            const findUser = await userModel.findOne({user:username,email:email})
            if(findUser){
                console.log('Name already taken')
                return done(null,false)
            }
            const newUser = {
                user,email,
                password: createHash(password)
            }
            console.log(newUser)////////
            const result = await userModel.create(newUser)
            return done(null,result)
        } catch(error){
            return done('Error in passport REGISTER'+error)
        }
    }))



passport.use('login',new localStrategy({
    usernameField: 'user'
},async(username,password,done)=>{

try { 

    const findUser = await userModel.findOne({user:username})
    if(!findUser){
        console.log('user does not exist')
        return done(null,user)
    }

    if(!isValidPassword(findUser,password)) return done(null,false)

    return done(null,findUser)

}catch (error){
done('error')
}





}))



    passport.serializeUser((user,done)=>{
        done(null,user._id)
    })

    passport.deserializeUser(async(id,done)=>{
        const user = await userModel.findById(id)
        done(null,user)
    })
}

export default initializePassport