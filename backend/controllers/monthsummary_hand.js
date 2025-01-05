const {fetchUser}=require('../middleware/fetchuser')
const MonthSummary=require('../models/monSummarymodel')
const User=require('../models/usermodel')
//@login required
const getMonthSummary=async(req,res)=>{
    try {
        const{year,month}=req.query
       
        if (!year || !month) {
            return res.status(400).json({ error: "year and month are required" });
        }
        const userId=req.user._id
        const user= await User.findById(userId)
        if (!user) {
            return res.status(400).json({ error: "no user found" });
        }
        
        const summary=await MonthSummary.findOne({month:month,year:year})
        if (!summary) { // Check if summary is found
            return res.status(404).json({ error: "no summary found" });
        }

        return res.status(200).json({success:true,summary})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
    

}
module.exports={getMonthSummary}