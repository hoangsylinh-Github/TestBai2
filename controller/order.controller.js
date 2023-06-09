import Order from "../models/order.js";
// import User from '../models/user.model.js'

const createOrder =async (req,res)=>{
    try {
        const newOrder = await Order.create(req.body)
        res.status(201).send({
            message:'thanh cong',
            data:newOrder,
        })
    } catch (error) {
        res.status(400).send({
            message:"khong tim thay san pham"
        })
    }
}

const getProduct= async(req,res)=>{
    try {
        const getOrder = await Order.finfById(req.params.id)
        res.status(200).send({
            message:"thanh cong!",
            data:getOrder
        })
    } catch (error) {
        res.status(400).send({
            message:"kong tim thay san pham"
        })
    }
}

export {createOrder, getProduct}