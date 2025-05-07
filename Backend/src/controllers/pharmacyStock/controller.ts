import {Request,Response} from "express";
import {PharmacyStock,IPharmacyStock} from "../../models/PharmacyStock";

interface  PharmacyStockResponse{
    success:boolean;
    data?:IPharmacyStock | IPharmacyStock[];
    message?:string;
}

export const createPharmacyStock = async (req:Request,res:Response<PharmacyStockResponse>) => {
    try{
        const newPharmacyStock = new PharmacyStock(req.body);
        const pharmacyStock = await newPharmacyStock.save();
        return res.status(201).json({success:true,data:pharmacyStock});
    }catch (error) {
        console.error(error);
        const message = error instanceof Error ? error.message : "Error creating pharmacy stock";
        return res.status(500).json({success:false,message});
    }
}

export const getPharmacyStocks = async (req:Request,res:Response<PharmacyStockResponse>) => {
    try{
        const {id} = req.params;

        if(id){
            const pharmacyStock = await PharmacyStock.findById(id);
            if(!pharmacyStock){
                return res.status(404).json({success:false,message:"Pharmacy stock not found"});
            }
            return res.status(200).json({success:true,data:pharmacyStock});
        }

        const pharmacyStocks = await PharmacyStock.find();
        return res.status(200).json({success:true,data:pharmacyStocks});
    }catch (error) {
        console.error(error);
        const message = error instanceof Error ? error.message : "Error getting pharmacy stocks";
        return res.status(500).json({success:false,message});
    }
}

export const updatePharmacyStock = async (req:Request,res:Response<PharmacyStockResponse>) => {
    try{
        const {id} = req.params;
        const updatedData = req.body;

        const updatedPharmacyStock = await PharmacyStock.findByIdAndUpdate(
            id,
            updatedData,
            {new:true,runValidators:true}
        );
        if(!updatedPharmacyStock){
            return res.status(404).json({success:false,message:"Pharmacy stock not found"});
        }
        return res.status(200).json({success:true,data:updatedPharmacyStock});
    }catch (error) {
        console.error(error);
        const message = error instanceof Error ? error.message : "Error updating pharmacy stock";
        return res.status(500).json({success:false,message});
    }
}

export const deletePharmacyStock = async (req:Request,res:Response<PharmacyStockResponse>) => {
    try{
        const {id} = req.params;
        const deletedPharmacyStock = await PharmacyStock.findByIdAndDelete(id);
        if(!deletedPharmacyStock){
            return res.status(404).json({success:false,message:"Pharmacy stock not found"});
        }
        return res.status(200).json({success:true,message:"Pharmacy stock deleted successfully"});
    }catch (error) {
        const message = error instanceof Error ? error.message : "Error deleting pharmacy stock";
        return res.status(500).json({success:false,message});
    }
}

