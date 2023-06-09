import { JWT_EXPIRES, JWT_SECRET } from "../jwt/jwt.js"
import User from "../models/user.model.js"
import  jwt  from "jsonwebtoken"
const createUser = async (req,res)=>{
try {
    const newUser = await User.create(req.body)
    const token =jwt.sign({id:newUser._id}, JWT_SECRET,{
        expiresIn: JWT_EXPIRES
    })
    res.status(201).send({
        message:"dang ki thanh cong",
        token,
        data:newUser
    })
    
} catch (error) {
    res.status(400).send({
        message:'k tim thay user'
    })
}
}

export {
    createUser
}