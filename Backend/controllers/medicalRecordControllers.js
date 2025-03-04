const MedicalRecord=require("../models/MedicalRecord");
const User=require("../models/User");

/// create medical record

exports.createMedicalRecord=async(req,res)=>{
    try{
        const {patientId,diagnosis,treatment,observations}=req.body;

        if(req.user.role!=="doctor"){
            return res.status(403).json({message:"Forbidden"});
    }

        const patient=await User.findById(patientId);
        if(!patient || patient.role!=="patient"){
            return res.status(404).json({message:"Patient not found"});
        }

        const medicalRecord = new MedicalRecord({
            patient:patientId,
            doctor:req.user.id,
            diagnosis,
            treatment,
            observations
        });

        await medicalRecord.save();

        res.status(201).json({message:"Medical record created",medicalRecord});
    }catch(e){
        res.status(500).json({message: e.message});
    }
};



/// get medical records patient

exports.getMedicalRecords=async(req,res)=>{
    try{
        const medicalRecords=await MedicalRecord.find({patient:req.user.id}).populate("doctor","name lastname email").sort({creation_date:-1});

        res.json(medicalRecords);
    }catch(e){
        res.status(500).json({message: e.message});
    }

};


/// uipdate medical record (nurse)

exports.updateMedicalRecord=async(req,res)=>{
    try{
        const {id}=req.params;
        const {observations}=req.body;

        if(req.user.role!=="nurse"){
            return res.status(403).json({message:"Only nurses can update medical records"});
    }

        const medicalRecord=await MedicalRecord.findById(id);

        if(!medicalRecord){
            return res.status(404).json({message:"Medical record not found"});
        }

        medicalRecord.observations=observations;
        medicalRecord.nurse=req.user.id;
        await medicalRecord.save();

        res.json({message:"Medical record updated",medicalRecord});
    }catch(e){
        res.status(500).json({message: e.message});
    }
};