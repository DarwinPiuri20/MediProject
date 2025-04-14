import {Schema,model,Document,Types} from 'mongoose'
import { IUser } from './User'
import {IMedicalTest} from './MedicalTest'

interface IDiagnosis{
    date:Date
    diagnosis:string
    description:string
    doctor:Types.ObjectId | IUser
}

interface IMedicalVisit{
    date:Date;
    reason:string;
    notes?:string;
    doctor:Types.ObjectId | IUser;
}

interface IVitalSigns{
    date:Date;
    temperature:number;
    bloodPressure:string;
    pulse:number;
    respiratoryRate:number;
    oxygenSaturation:number;
    nurse:Types.ObjectId | IUser;
}

export interface IMedicalRecord extends Document{
    patient:Types.ObjectId | IUser;
    medicalBackround?:string;
    allergies?:string[];
    diseases?:string[];
    diagnoses?:IDiagnosis[];
    medicalVisits?:IMedicalVisit[];
    vitalSigns?:IVitalSigns[];
    medicalTests?:Types.ObjectId[] | IMedicalTest[];
    createdAt?:Date;
    updatedAt?:Date
}

const medicalRecordSchema = new Schema<IMedicalRecord>({
    patient:{type:Schema.Types.ObjectId,ref:'User',required:true},
    medicalBackround:{type:String},
    allergies:{type:[String]},
    diseases:{type:[String]},
    diagnoses:[{
        date:{type:Date,required:true},
        diagnosis:{type:String,required:true},
        description:{type:String,required:true},
        doctor:{type:Schema.Types.ObjectId,ref:'User',required:true}
    }],
    medicalVisits:[{
        date:{type:Date,required:true},
        reason:{type:String,required:true},
        notes:{type:String},
        doctor:{type:Schema.Types.ObjectId,ref:'User',required:true}
    }],
    vitalSigns:[{
        date:{type:Date,required:true},
        temperature:{type:Number,required:true},
        bloodPressure:{type:String,required:true},
        pulse:{type:Number,required:true},
        respiratoryRate:{type:Number,required:true},
        oxygenSaturation:{type:Number,required:true},
        nurse:{type:Schema.Types.ObjectId,ref:'User',required:true}
    }],
    medicalTests:[{type:Schema.Types.ObjectId,ref:'MedicalTest'}],
    createdAt:{type:Date, default:Date.now},
    updatedAt:{type:Date, default:Date.now}
})

//Add indexes for better performance
medicalRecordSchema.index({patient:1})
medicalRecordSchema.index({'diagnoses.date':-1})
medicalRecordSchema.index({'medicalVisits.date':-1})

export const MedicalRecord= model<IMedicalRecord>('MedicalRecord',medicalRecordSchema)


