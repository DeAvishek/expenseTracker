const mongoose=require('mongoose')

const monthSummarySchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    month:{
        type:Number,
        required:true
    },
    year:{
        type:Number,
        require:true
    },
    totalExpense:{
        type:Number,
        default:0
    }
});
module.exports= mongoose.model('Monthsummary',monthSummarySchema)