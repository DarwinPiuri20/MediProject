import {Schema,model,Document,Types,Model} from 'mongoose'
import { IUser } from './User'

type AppointmentStatus = 'pending' | 'completed' | 'cancelled'

export interface IMedicalAppointment extends Document{
    patient:Types.ObjectId|IUser
    doctor:Types.ObjectId|IUser
    date:Date
    reason?:string
    status:AppointmentStatus
    createdAt?:Date
}

const medicalAppointmentSchema = new Schema<IMedicalAppointment>({
    patient:{type:Schema.Types.ObjectId,ref:'User',required:true, index:true},
    doctor:{type:Schema.Types.ObjectId,ref:'User',required:true, index:true},
    date:{type:Date,required:true, validate:{
        validator:(value:Date)=> value > new Date(),
        message:'Date must be in the future'
    }},
    reason:{type:String, trim:true, maxlength:[500,'Reason must be less than 500 characters']},
    status:{type:String, enum:['pending','completed','cancelled'],default:'pending'},
    createdAt:{type:Date, default:Date.now}
},{
    timestamps:false,
    versionKey:false
})


medicalAppointmentSchema.index({date:1})
medicalAppointmentSchema.index({patient:1,date:1})
medicalAppointmentSchema.index({doctor:1,status:1})


medicalAppointmentSchema.pre<IMedicalAppointment>('save',async function(next){
    
    const existingAppointment = await MedicalAppointment.findOne({
        doctor:this.doctor,
        date:this.date,
        _id:{$ne:this._id}
    })

    if(existingAppointment){
        throw new Error('Doctor is already scheduled for this date')
    }
    next()
})

medicalAppointmentSchema.methods.cancel = function(reason?:string){
    this.status = 'cancelled'
    if(reason) this.reason=`(Cancelled: ${reason})`
    return this.save()
}

interface MedicalAppointmentModel extends Model<IMedicalAppointment>{
    findByPatient(patient:Types.ObjectId):Promise<IMedicalAppointment[]>
}

export  const MedicalAppointment = model<IMedicalAppointment,MedicalAppointmentModel>('MedicalAppointment',medicalAppointmentSchema)