import {Schema,model,Document,Types, Model} from 'mongoose'
import { IUser } from './User'
import { IMedicalRecord } from './MedicalRecord'

type FilesType= 'profilePicture' | 'document' | 'medicalRecord'| 'medicalTest'| 'recipe'|'other';

export interface IFile extends Document{
    type:FilesType,
    user?:Types.ObjectId|IUser,
    medicalRecord?:Types.ObjectId|IMedicalRecord,
    url:string,
    originalName:string,
    createdAt?:Date,
    size?:number,
    mimeType?:string
}


const filesSchema=new Schema<IFile>({
    type:{type:String,required:true, enum:['profilePicture','document','medicalRecord','medicalTest','recipe','other'], index:true},
    user:{type:Schema.Types.ObjectId,ref:'User',index:true},
    medicalRecord:{type:Schema.Types.ObjectId,ref:'MedicalRecord',index:true},
    url:{type:String,required:true, validate:{
        validator:(value:string)=>{
            return value.startsWith('http://') || value.startsWith('https://')||value.startsWith('s3://')
        },
        message:'Invalid URL'
    }},
    originalName:{type:String,required:true},
    createdAt:{type:Date, default:Date.now, index:true},
    size:{type:Number,min:0},
    mimeType:{
        type:String,
        enum:['image/jepg', 'image/png', 'application/pdf', 'text/plain'],
        required: function(){
            return this.type !== 'other'
        }
    }
},{
    timestamps:false,
    versionKey:false
})

filesSchema.index({type:1, createdAt:-1})
filesSchema.index({user:1,type:1})

filesSchema.pre<IFile>('validate',function(next){
    if(!this.user&& !this.medicalRecord){
        this.invalidate('user', 'User or medicalRecord is required')
}
    next()
})

filesSchema.statics.findByUserAndType= function(
    userId:Types.ObjectId,
    type?: FilesType
){
    const query:any={user:userId}
    if(type) query.type=type
    return this.find(query).sort ({createdAt:-1})
}


filesSchema.methods.getFileInfo = function(){
    return{
        name: this.originalName || this.url.split('/').pop(),
        type: this.type,
        size: this.size,
        date: this.createdAt
    }
}


interface FilesModel extends Model<IFile>{
    findByUserAndType:(
        user:Types.ObjectId,
        type?:FilesType
    )=> Promise <IFile[]>
}


export const File=model<IFile,FilesModel>('File',filesSchema)