import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2'

const cartCollection = 'cart'


const cartSchema = mongoose.Schema({

    id: 
    {
        type:Number,
        index:true
    },
    price: Number,
    products:{
        type:[
            {
                product:{
                    type: mongoose.Schema.Types.ObjectId,
                    ref:'products'
                }
            }
        ],
        default:[]
    }
    
    
})

cartSchema.plugin(mongoosePaginate)

const cartModel = mongoose.model(cartCollection,cartSchema)

export default cartModel