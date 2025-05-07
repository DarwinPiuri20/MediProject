import {Schema,model,Document,Types} from 'mongoose'

export interface IUser extends Document {
    name: string;
    lastName: string;
    idCard:string;
    email:string;
    phone: string;
    password:string;
    role:'patient'|'doctor'|'nurse'|'pharmacist'|'admin'|'superAdmin';
    status:'active'|'inactive';
    establishment?:Types.ObjectId;
    profilePicture?:string; 
    documents?:Array<{name:string;url:string}>;
    createdAt?:Date;
    updatedAt?:Date;
    verified?:boolean;
    comparePassword: (password: string) => Promise<boolean>;
}

const userSchema = new Schema<IUser>({
    name:{type:String,required:true},
    lastName:{type:String,required:true},
    idCard:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    phone:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,required:true, enum:['patient','doctor','nurse','pharmacist','admin','superAdmin']},
    status:{type:String,required:true, enum:['active','inactive'],default:'active'},
    establishment:{type:Schema.Types.ObjectId,ref:'Establishment'},
    profilePicture:{type:String},
    documents:[{name:{type:String},url:{type:String}}],
    createdAt:{type:Date, default:Date.now},
    updatedAt:{type:Date, default:Date.now},
    verified:{type:Boolean, default:false}  
})

export const User= model<IUser>('User',userSchema)