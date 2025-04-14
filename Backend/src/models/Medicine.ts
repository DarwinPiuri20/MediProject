import {Schema,model,Document,Types} from 'mongoose'

export interface IMedicine extends Document{
    name:string;
    description:string;
    recommendedDose:string;
    interactions:string[];
    requiredPrescription:boolean;
    stock:number;
    unit:string;
    establishment:Types.ObjectId;
    createdAt?:Date;
    updatedAt?:Date
}

const medicineSchema = new Schema<IMedicine>({

    name:{type:String,required:true},
    description:{type:String,required:true},
    recommendedDose:{type:String,required:true},
    interactions:{type:[String],required:true},
    requiredPrescription:{type:Boolean,required:true},
    stock:{type:Number,required:true},
    unit:{type:String,required:true},
    establishment:{type:Schema.Types.ObjectId,ref:'Establishment',required:true},
    createdAt:{type:Date, default:Date.now},
    updatedAt:{type:Date, default:Date.now}
})

export const Medicine= model<IMedicine>('Medicine',medicineSchema)