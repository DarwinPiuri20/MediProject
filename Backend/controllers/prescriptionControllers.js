const Prescription=require("../models/Prescription");
const User=require("../models/User");


//// add prescription(doctor)


exports.createPrescription=async(req,res)=>{
    try{
        const {patientId,doctorId,medication}=req.body;
        
        if(req.user.role!=="doctor"){
            return res.status(403).json({message:"Only doctors can create prescriptions"});
        }

        const patient=await User.findById(patientId);
        if(!patient || patient.role!=="patient"){
            return res.status(404).json({message:"Patient not found"});
        }

        const newPrescription=new Prescription({
            patient:patientId,
            doctor:req.user.id,
            medication
        });

        await newPrescription.save();

        res.status(201).json({message:"Prescription created",prescription:newPrescription});
    }catch(e){
        res.status(500).json({message: e.message});
    }
};


//// get prescriptions(patients)

exports.myPrescriptions=async(req,res)=>{
    try{
        const prescriptions=await Prescription.find({patient:req.user.id}).populate("doctor","name lastname email");
        res.json(prescriptions);
    }catch(e){
        res.status(500).json({message: e.message});
    }
};

/// get prescriptions(doctor)

exports.doctorPrescriptions=async(req,res)=>{
    try{
        if(req.user.role!=="doctor"){
            return res.status(403).json({message:"Only doctors can get prescriptions"});
        }
        const prescriptions=await Prescription.find({doctor:req.user.id}).populate("patient","name lastname email");
        res.json(prescriptions);
    }catch(e){
        res.status(500).json({message: e.message});
    }
};


/// dispense prescription

exports.dispensePrescription=async(req,res)=>{
    try{
        const prescription=await Prescription.findById(req.params.id);

        if(!prescription){
            return res.status(404).json({message:"Prescription not found"});
        }

        if(req.user.role !== "pharmacy"){
            return res.status(403).json({message:"Only pharmacies can dispense prescriptions"});
        }

        prescription.state="dispensed";
        await prescription.save();

        res.json({message:"Prescription dispensed",prescription});
    }catch(e){
        res.status(500).json({message: e.message});
    }
};


