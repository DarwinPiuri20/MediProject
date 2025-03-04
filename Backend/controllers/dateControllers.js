const Date=require("../models/Date");
const User=require("../models/User");



//// add date

exports.addDate=async(req,res)=>{
    try{
        const {doctorId,date,reason}=req.body;

        if(req.user.role!=="patient"){
            return res.status(403).json({message:"Forbidden"});
    }


    const doctor=await User.findById(doctorId);

    if(!doctor || doctor.role!=="doctor"){
        return res.status(404).json({message:"Doctor not found"});
    }

    const newDate=new Date({
        patient:req.user.id,
        doctor:doctorId,
        date,
        reason
    });

    await newDate.save();

    res.status(201).json({message:"Date created",date:newDate});

    }catch(e){
        res.status(500).json({message: e.message});
   
}};


///get patient dates

exports.myDates=async(req,res)=>{
    try{
        const dates= await Date.find({patient:req.user.id}).populate("doctor","name lastname email");

        res.json(dates);
    }catch(e){
        res.status(500).json({message: e.message});
    }
};



/// get doctor dates


exports.doctorDates=async(req,res)=>{
    try{
        if(req.user.role!=="doctor"){
            return res.status(403).json({message:"Forbidden"});
    }

    const dates= await Date.find({doctor:req.user.id}).populate("patient","name lastname email");

    res.json(dates);
    }catch(e){
        res.status(500).json({message: e.message});
    }};



/// accept date (doctor)

exports.acceptDate=async(req,res)=>{
    try{
        const date = await Date.findById(req.params.id);
        
        if(!date){
            return res.status(404).json({message:"Date not found"});
        }
        
        if(req.user.role !== "doctor" || date.doctor.toString()!==req.user.id){
            return res.status(403).json({message:"Forbidden"});
        }
        date.state="accepted";
        await date.save();

        res.json({message:"Date accepted"});
    }catch(e){
        res.status(500).json({message: e.message});
    }};


    /// reject date (doctor or patient)


    exports.rejectDate=async(req,res)=>{
        try{
            const date = await Date.findById(req.params.id);

            if(!date){
                return res.status(404).json({message:"Date not found"});
            }  
            
            if(date.patient.toString() !== req.user.id && req.doctor.toString() !== req.user.id){
                return res.status(403).json({message:"Forbidden"});
            }

            date.state="rejected";
            await date.save();

            res.json({message:"Date rejected",date});
        }catch(e){
            res.status(500).json({message: e.message});
        }
    
    };
    