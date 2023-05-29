import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2'

const productCollection = 'products'


const productSchema = mongoose.Schema({

    id: Number,
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String
})

productSchema.plugin(mongoosePaginate)

const productModel = mongoose.model(productCollection,productSchema)

export default productModel