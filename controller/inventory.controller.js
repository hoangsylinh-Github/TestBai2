import Inventory from "../models/inventory.js";

const createInventory = async (req,res)=>{
    try{
        const newInventory = await Inventory.create(req.body)
        res.status(200).send({
            message:"thanh cong",
            data: newInventory
        })
    }catch(error){
        res.status(400).send({
            message:'k tim thay'
        })
    }
}

const getAllInventory = async (req,res)=>{
    try {
        const getAllInventory = await Inventory.find()
        res.status(200).send({
            message:"thanh cong",
            result:getAllInventory.length,
            data: getAllInventory
        })
    } catch (error) {
        res.status(400).send({
            message:'khong tim thay'
        })
    }
}

export {
    createInventory,
    getAllInventory
}