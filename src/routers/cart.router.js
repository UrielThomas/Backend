import { Router } from "express";
import cartHandler from "../Handlers/cart.handler.js";

const cart_handler = new cartHandler()

const router = Router()



router.get('/',async(req,res)=>{
const name = req.query.name

const add = cart_handler.addProduct(name)


res.render('cart',{})


})

export default router