import {Request,Response} from "express";
import {User,IUser} from "../../models/User";



export const createUser = async (req:Request,res:Response) => {
    try{
        const newUser = new User(req.body);
        const user: IUser = await newUser.save();
        return res.status(201).json(user);
    }catch (error) {
        res.status(500).json({message:"Error creating user"});
    }
}
export const getUsers = async (req:Request,res:Response) => {
    try{
        const {id}= req.params;
        if(id){
            const user = await User.findById(id);
            if(!user){
                return res.status(404).json({message:"User not found"});
            }
            return res.status(200).json(user);
        }
        const users = await User.find();
        return res.status(200).json(users);
    }catch (error) {
        res.status(500).json({message:"Error getting users"});
    }
}

export const updateUser = async (req:Request,res:Response) => {
    try{
        const {id} = req.params;
        const updatedUser= await User.findByIdAndUpdate(id,req.body,{new:true});
        if(!updatedUser){
            return res.status(404).json({message:"User not found"});
        }
        return res.status(200).json(updatedUser);
    }catch (error) {
        res.status(500).json({message:"Error updating user"});
    }
}


export const deactivateUser = async(req:Request,res:Response) => {
    try{
        const {id} = req.params;
        const user = await  User.findByIdAndUpdate(id,{status:'inactive'},{new:true});
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        res.status(200).json(user);
    }catch (error) {
        res.status(500).json({message:"Error deactivating user"});
    }
}
