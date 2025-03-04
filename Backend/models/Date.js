const mongoose = require("mongoose");

const dateSchema= new mongoose.Schema({
    patient:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    doctor:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    date:{type:Date,required:true},
    state:{type:String,enum:["pending","accepted","rejected"],required:true,default:"pending"},
    reason:{type:String,required:true}
});

module.exports=mongoose.model("Date",dateSchema);