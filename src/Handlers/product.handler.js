import mongoose, { mongo } from "mongoose";
import productModel from "../models/product.model.js";
import { query } from "express";



class productHandler {

    
    constructor(path) {
        this.path = path;
    }

    showProds =  async (page,lim) => { 

        const prodPage = await productModel.paginate({},
            {
            page:page,
            limit:lim,
            lean:true
        })
        return prodPage

    }

    finder = async(name)=>{

        const toFind = await productModel.find({title:name}).lean().exec()
        // console.log(toFind)
        return toFind

    }

    
    }





export default productHandler