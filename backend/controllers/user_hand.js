const User=require('../models/usermodel')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
require('dotenv').config()
const jwt_secret=process.env.JWT_SECRET


const signupUser=async(req,res)=>{
    try {
        const{name,email,password}=req.body
        if(!name|| !email || !password){
            return res.status(400).json({error:"missing filelds required"})
        }
        //validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return res.status(400).json({error: "Please enter a valid email address"})
        }
        const user= await User.findOne({email})
        if(user){
            return res.status(409).json({error:"user with this email exists"})
        }

        //validate password
        if(password.length < 6){
            return res.status(400).json({error: "Password must be at least 6 characters long"})
        }
        const salt=10;
        const hashPassword=await bcrypt.hash(password,salt)
        const newUser= await User.create({
            name,
            email,
            password:hashPassword
        })
        const token=jwt.sign({id: newUser._id}, jwt_secret)
        return res.status(201).json({bearer: token})
    } catch (error) {
        return res.status(500).json({error:"internal server error"})
    }
    
}
const loginUser=async(req,res)=>{
    try {
        const{email,password}=req.body
        if(!email){
            return res.status(400).json({error:"missing email field"})
        }
        if(!password){
            return res.status(400).json({error:"missing password field"})
        }

        let owner= await User.findOne({email})
        if(!owner){
            return res.status(404).json({error:"wrong credentials ! login with valid one"})
        }
        const comparePassword = await bcrypt.compare(password, owner.password)

        if(!comparePassword){
            return res.status(400).json({error:"wrong credentials ! login with valid one"})
        }
        const token= jwt.sign({id:owner._id},jwt_secret)
        return res.status(200).json({succes:true,bearer:token})
    } catch (error) {
        return res.status(500).json({error:"internal server error"})
    }
}
const getUser=async(req,res)=>{
    try {
        if (!req.user) {
            return res.status(401).json({error: "Authentication required"});
        }
        const userId=req.user._id
        const owner=await User.findById(userId).select('-password')
        return res.status(200).json(owner)
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:"internal server error"})
    }
    


}
module.exports={signupUser,loginUser,getUser}