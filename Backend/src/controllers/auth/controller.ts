import { Request,Response } from "express";
import {User,IUser} from "../../models/User";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// User interfaaz withoutr sensitive data
interface ReturnUser{
    firstName:string;
    lastName:string;
    email:string;
    role:string;
    status:string;
    establishment?:string;
}

// interface for good response
interface AuthResponse{
    user:ReturnUser;
    token:string;
}


// function to firm token

const signToken = (user:IUser):string =>{
    if(!process.env.JWT_SECRET){
        throw new Error("JWT_SECRET is not defined");
    }
    return jwt.sign({id:user._id},process.env.JWT_SECRET);
}

export const register = async(req:Request,res:Response)=>{
    try{
        //create user with body data
        const newUser = new User({
            ...req.body,
            createdAt:Date.now(),
        });

        // save user in db
        const user: IUser = await newUser.save();

        // create token
        const token = signToken(user);

        // response without sensitive data
        const returNewUser: ReturnUser = {
            firstName:user.name,
            lastName:user.lastName,
            email:user.email,
            role:user.role,
            status:user.status,
            establishment:user.establishment?.toString()
        };

        const response : AuthResponse = {
            user:returNewUser,
            token
        }
        res.status(201).json(response);
    }catch(err:unknown){
        res.status(500).json({message:err});
    }
}

///login 