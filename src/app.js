import express from "express"
import __dirname from "./utilis.js";
import handlebars from "express-handlebars"
import mongoose from "mongoose"
import {Server} from 'socket.io'
import productRouter from "./routers/product.router.js"
import productDetailRouter from './routers/product.detail.router.js'
import cartRouter from './routers/cart.router.js'
import loginRouter from './routers/login.router.js'
import session from 'express-session'
import  FileStore  from 'session-file-store'
import MongoStore from 'connect-mongo'
import registerRouter from './routers/register.router.js'


const uri = 'mongodb+srv://Uriel:elviejo1@projectbackend.yrbfvk1.mongodb.net/final_project'
const app = express()
const port = 8080;

app.use(express.json())
app.use(express.urlencoded({extended: true}))


const fileStore = FileStore(session)
app.use(session({
    store: MongoStore.create({
        mongoUrl: uri ,
        dbName: 'sessions',
        mongoOptions:{
            useNewUrlParser: true,
            useUnifiedTopology:true
        },
        ttl:120,
    }),
    secret: 'coder',
    resave:true,
    saveUninitialized: true
}))






app.engine('handlebars',handlebars.engine())
app.set('views',__dirname +'/views')
app.set('view engine','handlebars')

app.use(express.static(__dirname+'/public'))



app.use('/api',loginRouter)
app.use('/api/products',productRouter)
app.use('/api/productDetail',productDetailRouter)
app.use('/api/cart',cartRouter)
app.use('/register',registerRouter)
app.use('/',loginRouter)



mongoose.set('strictQuery',false)
try{
    
    await mongoose.connect(uri)
    console.log('database connected')
    const server = app.listen(port,()=>console.log(`we cookin bruuuh`))
    const io = new Server(server) // <--------handshake


}catch(err){
    console.log('error trying to connect to database')

}