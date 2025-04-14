import { Schema,model,Document,Types } from "mongoose";
import {IUser} from './User';

export interface IMedicalTest extends Document{
    type:string,
    description:string,
    patient:Types.ObjectId|IUser,
    doctor:Types.ObjectId|IUser,
    date?:Date
    fileUrl:string 
    results?:string
}

const medicalTestSchema = new Schema<IMedicalTest>({
    type:{type:String,required:true,trim:true},
    description:{type:String,trim:true},
    patient:{type:Schema.Types.ObjectId,ref:'User',required:true,index:true},
    date:{type:Date,default:Date.now,index:true},
    fileUrl:{type:String,required:true, validate:{
        validator:(value:string)=>{
            return value.startsWith('https://') || value.startsWith('http://')
        },
        message:'File URL must be a valid URL'
    }},
    results:{type:String,trim:true},
    doctor:{type:Schema.Types.ObjectId,ref:'User',required:true}  
})


medicalTestSchema.index({type:1})
medicalTestSchema.index({patient:1,date:-1})


medicalTestSchema.pre<IMedicalTest>('save', function(next){
    if(this.doctor && !this.results){
        console.warn('No results provided for medical test')
    }
    next()
})

medicalTestSchema.methods.markAsCompleted = function(results:string){
    this.results = results
    return this.save()
}


export const MedicalTest = model<IMedicalTest>('MedicalTest',medicalTestSchema)
