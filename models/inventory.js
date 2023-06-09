import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
    sku:{
        type:String,
        require:[true,'sku is required']
    },
    description:String,
    instock:Number
})

const Inventory = mongoose.model('Inventory',inventorySchema)

export default Inventory