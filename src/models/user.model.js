import mongoose from "mongoose";


const userCollection = 'users'


const userSchema = mongoose.Schema({

    id: Number,
    user: String,
    password: String,
    authorization: Boolean,
    email: String
})



const userModel = mongoose.model(userCollection,userSchema)

export default userModel