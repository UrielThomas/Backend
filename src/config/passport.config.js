import passport from "passport";
import local from "passport-local"
import userModel from "../models/user.model.js";
import { createHash } from "../utilis.js";

const localStrategy = local.Strategy

const initializePassport=()=>{

    passport.serializeUser('register',new localStrategy({
        passReqToCallback: true,
        usernameField:'user'
    }),async(req,username,password,done)=>{
        const {user,email} = req.body
        try{
            const user = await userModel.findOne({user:username})
            if(user){
                console.log('Name already taken')
                return done(null,false)
            }
            const newUser = {
                user,email,
                password: createHash(password)
            }
            const result = await userModel.create(newUser)
            return done(null,result)
        } catch(error){
            return done('Error in passport REGISTER'+error)
        }
    })
}

export default initializePassport