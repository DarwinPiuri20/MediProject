const Date=require("../models/Date");
const Prescription=require("../models/Prescription");
const User=require("../models/User");

/// total users for each role (admin)
exports.getTotalUsersByRole=async(req,res)=>{
    try{
        const totalUsersByRole = await User.aggregate([
            { $group: { _id: "$role", count: { $sum: 1 } } } 
        ]);

        res.json(totalUsersByRole);
    }catch(e){
        res.status(500).json({message: e.message});
    }
};


/// total dates for each state
exports.totalDatesByState=async(req,res)=>{
    try{
        const totalDatesByState = await Date.aggregate([
            { $group: { _id: "$state", count: { $sum: 1 } } } 
        ]);

        res.json(totalDatesByState);
    }catch(e){
        res.status(500).json({message: e.message});
    }
};


/// total prescriptions for each state
exports.totalPrescriptionsByState=async(req,res)=>{
    try{
        const totalPrescriptionsByState = await Prescription.aggregate([
            { $group: { _id: "$state", count: { $sum: 1 } } } 
        ]);
    
        res.json(totalPrescriptionsByState);
    }catch(e){
        res.status(500).json({message: e.message});
    }
};


/// most prescribed medications

exports.mostPrescribedMedications=async(req,res)=>{
  try{
    const medications = await Prescription.aggregate([
        {$unwind: "$medication"},
        {$group: {_id: "$medication.name", count: {$sum: 1}}},
        {$sort: {count: -1}},
        {$limit: 10}
    ]);

    res.json(medications);
  }catch(e){
    res.status(500).json({message: e.message});
  }
};


///dates per doctor

exports.datesPerDoctor=async(req,res)=>{
    try{
        if(req.user.role!=="doctor"){
            return res.status(403).json({message:"Forbidden"});
    }

    const dates = await Date.find({doctor:req.user.id}).populate("patient","name lastname email").sort({date: -1});

    res.json(dates);
    }catch(e){
        res.status(500).json({message: e.message});
    }
};



/// patient prescriptions(doctor)

exports.patientPrescriptions=async(req,res)=>{
    try{
        const {patientId}=req.params;

        if(req.user.role!=="doctor"){
            return res.status(403).json({message:"Forbidden"})
        }

        const prescriptions=await Prescription.find({patient:patientId}).sort({date:-1});

        res.json(prescriptions);
    }catch(e){
        res.status(500).json({message: e.message});
    }
};

