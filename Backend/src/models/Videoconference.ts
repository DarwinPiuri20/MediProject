import {Schema,model,Document,Types,Model} from 'mongoose'
import { IMedicalAppointment } from './MedicalAppointment'

type VideoconferenceStatus = 'pending' | 'on_course' | 'completed'

export interface IVideoconference extends Document{
  date:Types.ObjectId | IMedicalAppointment
  link:string
  status:VideoconferenceStatus
  recordingUrl?:string
  startedAt?:Date
  endedAt?:Date  
}

const videoconferenceSchema = new Schema<IVideoconference>({
    date:{type:Schema.Types.ObjectId,ref:'MedicalAppointment',required:true, index:true},
    link:{type:String,required:true,validate:{
        validator:(value:string)=>{
            return value.startsWith('https://')||value.startsWith('http://')||value.startsWith('zoom://')||value.startsWith('zoom://')
        },
        message:'Link must be a valid URL'
    }},
    status:{type:String,required:true,enum:['pending','on_course','completed'],default:'pending'},
    recordingUrl:{type:String, validate:{
        validator:(value:string)=>{
            if(!value) return true
            return value.startsWith('https://')||value.endsWith('.mp4')||value.endsWith('.mov')
        },
        message:'Recording URL must be a valid URL'
    }},
    startedAt:{type:Date},
    endedAt:{type:Date}
},{
    timestamps:true,
    versionKey:false
})

videoconferenceSchema.index({status:1})
videoconferenceSchema.index({'date.date':1})

videoconferenceSchema.pre<IVideoconference>('save',function(next){

    if(this.isModified('status')){
        if(this.status==='on_course'){
            this.startedAt = new Date()
    }else if(this.status==='completed'){
        this.endedAt = new Date()
    }
    }
    next()
})

videoconferenceSchema.statics.findByStatus = function(status:VideoconferenceStatus) {
    return this.find({status}).populate({
        path:'date',
        populate:[{path:'patient',select:'name lastName'},
                {path:'doctor',select:'name lastName'}]
    })
}


videoconferenceSchema.methods.startConference = function(){
    this.status = 'on_course'
    this.startedAt = new Date()
    return this.save()
}

videoconferenceSchema.methods.endConference = function(recordingUrl?:string){
    this.status = 'completed'
    this.endedAt = new Date()
    if(recordingUrl) this.recordingUrl = recordingUrl
    return this.save()
}

interface VideoconferenceModel extends Model<IVideoconference>{findByStatus(status:VideoconferenceStatus):Promise<IVideoconference[]>}

export const Videoconference = model<IVideoconference,VideoconferenceModel>('Videoconference',videoconferenceSchema)