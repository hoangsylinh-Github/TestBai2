import  express  from "express";
import mongoose from "mongoose";
import { createUser } from "./controller/user.controller.js";
import {createInventory,getAllInventory} from './controller/inventory.controller.js'
import {createOrder,getProduct} from './controller/order.controller.js'
const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/question2').then(result=>{
    console.log('database is connection successfull')

}).catch(err=>{
    console.log(err)
})

app.post('/user',createUser)
app.post('/inventory',createInventory)
app.get('/allInventory',getAllInventory)
app.post('/product',createOrder)
app.get('/getProduct/:id',getProduct)
app.listen(3000,()=>{
    console.log('listening on port 3000')
})
