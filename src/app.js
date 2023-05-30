import express from "express"
import __dirname from "./utilis.js";
import handlebars from "express-handlebars"
import mongoose from "mongoose"
import {Server} from 'socket.io'
import productRouter from "./routers/product.router.js"
import productDetailRouter from './routers/product.detail.router.js'
import cartRouter from './routers/cart.router.js'


const uri = 'mongodb+srv://Uriel:elviejo1@projectbackend.yrbfvk1.mongodb.net/final_project'
const app = express()
const port = 8080;

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.engine('handlebars',handlebars.engine())
app.set('views',__dirname +'/views')
app.set('view engine','handlebars')

app.use(express.static(__dirname+'/public'))

app.use('/api/products',productRouter)
app.use('/api/productDetail',productDetailRouter)
app.use('/api/cart',cartRouter)


app.get('/',(req,res)=>res.send('on'))


mongoose.set('strictQuery',false)
try{
    
    await mongoose.connect(uri)
    console.log('database connected')
    const server = app.listen(port,()=>console.log(`we cookin bruuuh`))
    const io = new Server(server) // <--------handshake


}catch(err){
    console.log('error trying to connect to database')

}