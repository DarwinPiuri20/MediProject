import {Schema,model,Document,Types} from 'mongoose'
import { IUser } from './User'

export interface IEstablishment extends Document {
name:string;
type:'clinic'|'hospital'|'pharmacy'|'lab'|'other';
direction:string;
phone:string;
email:string;
admins:Types.ObjectId[] | IUser[];
createdAt?:Date;
updatedAt?:Date
}

const establishmentSchema = new Schema<IEstablishment>({
    name:{type:String,required:true},
    type:{type:String,required:true,enum:['clinic','hospital','pharmacy','lab','other']},
    direction:{type:String,required:true},
    phone:{type:String,required:true},
    email:{type:String,required:true},
    admins:[{type:Schema.Types.ObjectId,ref:'User'}],
    createdAt:{type:Date, default:Date.now},
    updatedAt:{type:Date, default:Date.now}
})

export const Establishment= model<IEstablishment>('Establishment',establishmentSchema)