import cartModel from "../models/cart.model.js";
import productModel from "../models/product.model.js";
import { query } from "express";
import mongoose from "mongoose";


class cartHandler {

    
    constructor(path) {
        this.path = path;
    }


    findProduct = async(name)=>{

        const toFind = await productModel.findOne({title:name}).lean().exec()
        
        return toFind
        
        

    }





}

export default cartHandler