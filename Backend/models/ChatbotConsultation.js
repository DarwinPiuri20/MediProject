const mongoose = require("mongoose");

const chatbotConsultationSchema = new mongoose.Schema({
    patient:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    question:{type:String,required:true},
    answer:{type:String},
    creation_date:{type:Date,default:Date.now}
});

module.exports = mongoose.model("ChatbotConsultation", chatbotConsultationSchema);