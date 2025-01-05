const jwt=require('jsonwebtoken')
 require('dotenv').config()
 const User=require('../models/usermodel')
 const jwt_secret=process.env.JWT_SECRET
const fetchUser=async(req,res,next)=>{
    try {
    const token=req.header('bearer')
    if(!token){
        return res.status(401).json({error:"Authentication token missing"})
    }
        const data= jwt.verify(token,jwt_secret)
        const user = await User.findById(data.id)
        if (!user) {
            return res.status(401).json({error:"User not found"})
        }
        req.user = user
        next();
    } catch (error) {
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({error:"Invalid token"})
        }
        return res.status(401).json({error:"Authentication failed"})
    }
    
}
 module.exports={fetchUser}