import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2'

const cartCollection = 'cart'


const cartSchema = mongoose.Schema({

    id: Number,
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String
})

cartSchema.plugin(mongoosePaginate)

const cartModel = mongoose.model(cartCollection,cartSchema)

export default cartModel