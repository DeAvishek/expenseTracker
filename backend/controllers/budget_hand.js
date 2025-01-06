const Budget=require('../models/budgetmodel')
const User=require('../models/usermodel')
const createBudget=async(req,res)=>{
    try {
        const userId=req.user._id;
        const user=await User.findById(userId)

    if(!user){
        return res.status(401).json({error:"Unauthorized access"})
    }
    const {budget,description}=req.body;
    const newBudget=await Budget.create({
        userId:userId,
        budget:budget,
        description:description
    })
    return res.status(201).json({success:true,newBudget})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }

}
const getTotalBudget=async(req,res)=>{
    try {
        const userId=req.user._id;
        const user=await User.findById(userId)
    if(!user){
        return res.status(401).json({error:"Unauthorized access"})
    } 
    const totalBudget=await Budget.aggregate([{
        $group:{
            _id:null,
            totalBudget:{$sum:"$budget"}
        }
        
    }
    ])
    return res.status(200).json({success:true,totalBudget})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}
module.exports={createBudget,getTotalBudget}