import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config()

const MONGO_URI = process.env.MONGO_URI as string;

if(!MONGO_URI){
    throw new Error("MONGO_URI is not defined");
}

export const connectDB= async ():Promise<void> =>{
try{
    await mongoose.connect(MONGO_URI);
    console.log('DB connected');


    
console.log('DB connected');


mongoose.connection.on('error', err => {
    console.log(err);
})


}catch(err){
    console.log(err);
}
}

