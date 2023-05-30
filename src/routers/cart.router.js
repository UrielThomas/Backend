import { Router } from "express";
import cartHandler from "../Handlers/cart.handler.js";
import cartModel from "../models/cart.model.js";

const cart_handler = new cartHandler()

const router = Router()



router.get('/',async(req,res)=>{
const name = req.query.name
const found = await cart_handler.addProduct(name)
const prodId= found._id
const cart = await cartModel.findOne({_id:'6476491d0cb499599ca76386'})
console.log(prodId)
cart.products.push({product:prodId})
const result =await cartModel.updateOne({_id:'6476491d0cb499599ca76386'},cart)
console.log(result)

res.render('cart',{found})

})

router.get('/consult',async(req,res)=>{

    const showcart  = await cartModel.findOne({_id:'6476491d0cb499599ca76386'}).populate('products.product').lean().exec()
    console.log(JSON.stringify(showcart,null,'\t'))

    res.send(showcart)
})




export default router