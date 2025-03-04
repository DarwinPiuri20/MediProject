const mongoose = require("mongoose");

const medicalRecordSchema = new mongoose.Schema({
patient:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
doctor:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
nurse:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
diagnosis:{type:String,required:true},
treatment:{type:String,required:true},
observations:{type:String,required:true},
creation_date:{type:Date,default:Date.now}
});

module.exports = mongoose.model("MedicalRecord", medicalRecordSchema);