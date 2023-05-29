import { Router } from "express";
import productHandler from "../Handlers/product.handler.js";
const prodHandler = new productHandler()

const router = Router()



router.get('/',async(req,res)=>{

    let lim = parseInt(req.query.lim)
    if(!lim) lim = 10
    let page = parseInt(req.query.page)
    if(!page) page = 1
    const allProds = await prodHandler.showProds(page,lim)
    console.log(allProds.totalPages)
    // console.log(allProds.hasPrevPage)
    // console.log(allProds.hasNextPage)

    allProds.prevLink=allProds.hasPrevPage ? `http://localhost:8080/api/products?page=${allProds.prevPage}&lim=${lim}`:''
    allProds.nextLink=allProds.hasNextPage ? `http://localhost:8080/api/products?page=${allProds.nextPage}&lim=${lim}`:''

    res.render('products', { allProds})

})


export default router
