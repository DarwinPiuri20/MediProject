const ChatbotConsultation = require("../models/ChatBotConsultation");
const OpenAI=require("openai");


/// OPENAI config
const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY});


/// function to create chatbot consultation
exports.consultationChatbot=async(req,res)=>{
    try{
        const {question}=req.body;

        if(!question){
            return res.status(400).json({message:"Question is required"});
        }

        //generate answer with openai

        const response = await openai.chat.completions.create({
            model:"gpt-4",
            messages:[{role:"user",content:question}]
        });
        const answer=response.data.choices[0].text.trim();

        const newConsult=new ChatbotConsultation({
            patient:req.user.id,
            question,
            answer
        });

        await newConsult.save();

        res.status(201).json({message:"Chatbot consultation created",consultation:newConsult});
    }catch(e){
        res.status(500).json({message: e.message});
    }
};


/// get chatbot consultations

exports.consultationHistory=async(req,res)=>{
    try{
        const consultations= await ChatBotConsultation.find({patient:req.user.id}).sort({creation_date:-1});
        res.json(consultations);
    }catch(e){
        res.status(500).json({message: e.message});
    }
}

