import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type : String,
        require:[true, 'name is required']
    },
    password:{
        type: String,
        require:[true,'password is required'],
        minLength:8
    }
})


const User = mongoose.model('User',userSchema)
export default User