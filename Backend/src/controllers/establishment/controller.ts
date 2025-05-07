import { Request, Response } from "express";
import { Establishment, IEstablishment } from "../../models/Establishment";

interface EstablishmentResponse {
    success: boolean;
    data?: IEstablishment | IEstablishment[];
    message?: string;
}

export const createEstablishment = async (req: Request, res: Response<EstablishmentResponse>) => {
    try {

        const newEstablishment = new Establishment(req.body);
        const establishment = await newEstablishment.save();

        return res.status(201).json({ success: true, data: establishment });
    } catch (error) {
        console.error(error);
        const message = error instanceof Error ? error.message : "Error creating establishment";
        return res.status(500).json({ success: false, message });
    }
}

export const getEstablishments = async (req: Request, res: Response<EstablishmentResponse>) => {
    try {
        const { id } = req.params;

        if (id) {
            const establishment = await Establishment.findById(id);
            if (!establishment) {
                return res.status(404).json({ success: false, message: "Establishment not found" });
            }
            return res.status(200).json({ success: true, data: establishment });
        }

        const establishments = await Establishment.find();
        return res.status(200).json({ success: true, data: establishments });
    } catch (error) {
        console.error(error);
        const message = error instanceof Error ? error.message : "Error getting establishments";
        return res.status(500).json({ success: false, message });
    }
}

export const updateEstablishment = async (req: Request, res: Response<EstablishmentResponse>) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        const updatedEstablishment = await Establishment.findByIdAndUpdate(
            id,
            updatedData,
            { new: true, runValidators: true }
        );

        if (!updatedEstablishment) {
            return res.status(404).json({ success: false, message: "Establishment not found" });
        }

        return res.status(200).json({ success: true, data: updatedEstablishment });
    } catch (error) {
        console.error(error);
        const message = error instanceof Error ? error.message : "Error updating establishment";
        return res.status(500).json({ success: false, message });
    }
}

export const deleteEstablishment = async (req: Request, res: Response<EstablishmentResponse>) => {
    try {
        const { id } = req.params;
        const establishment = await Establishment.findByIdAndDelete(id);

        if (!establishment) {
            return res.status(404).json({ success: false, message: "Establishment not found" });
        }

        return res.status(200).json({ success: true, message: "Establishment deleted successfully" });
    } catch (error) {
        console.error(error);
        const message = error instanceof Error ? error.message : "Error deleting establishment";
        return res.status(500).json({ success: false, message });
    }
}