
const MonthSummary=require('../models/monSummarymodel')
const User=require('../models/usermodel')
//@login required
const getMonthSummary=async(req,res)=>{
    try {
        const userId=req.user._id
        const user= await User.findById(userId)
        if (!user) {
            return res.status(400).json({ error: "no user found" });
        }
        const summary=await MonthSummary.find({userId:userId})
        return res.status(200).json({success:true,summary})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
    

}
module.exports={getMonthSummary}