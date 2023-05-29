import { Router } from "express";
import productHandler from "../Handlers/product.handler.js";
const prodHandler = new productHandler()

const router = Router()

router.get('/',async(req,res)=>{

    const product = req.query.product
    const detailedProduct = await prodHandler.finder(product)
    const indexedDetailedProduct = detailedProduct[0]
    console.log(detailedProduct[0])

    res.render('productDetail',{indexedDetailedProduct})

})

export default router