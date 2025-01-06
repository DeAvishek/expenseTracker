const mongoose=require('mongoose')

const budgetSchema=new mongoose.Schema({
    userId: { // Relates expense to a user (multi-user apps)
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    budget:{
        type:Number,
        required:true
    },
    description:{
        type:String
    }
     
},{
 timestamps:true
})
module.exports=mongoose.model("Budget",budgetSchema)