import cartModel from "../models/cart.model.js";
import productModel from "../models/product.model.js";
import { query } from "express";
import mongoose from "mongoose";


class cartHandler {

    
    constructor(path) {
        this.path = path;
    }


    addProduct = async(name)=>{

        const toFind = await productModel.find({title:name}).lean().exec()
        const indexedFound = toFind[0]
        console.log(indexedFound)
        

        const addOne = await cartModel.insertOne({

            title : indexedFound.title,
            price : indexedFound.price,
            description: indexedFound.description,
            category: indexedFound.category,
            image:indexedFound.image
        })
        

    }





}

export default cartHandler