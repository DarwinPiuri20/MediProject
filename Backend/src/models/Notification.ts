import {Schema,model,Document,Types,Model} from 'mongoose'
import { IUser } from './User'

type NotificationsType = 'renminder'|'alert'|'message'

export interface INotification extends Document{
    user:Types.ObjectId|IUser
    type:NotificationsType
    message:string
    read:boolean
    date:Date
    metadata?:any
}

const notificationSchema = new Schema<INotification>({
    user:{type:Schema.Types.ObjectId,ref:'User',required:true, index:true},
    type:{type:String,required:true,enum:['renminder','alert','message'],index:true},
    message:{type:String,required:true, trim: true, maxLength:[500,'Message must be less than 500 characters']},
    read:{type:Boolean,required:true, default:false},
    date:{type:Date, default:Date.now, index:true},
    metadata:{type:Schema.Types.Mixed}
},{
    timestamps:false,
    versionKey:false
})

notificationSchema.index({user:1,read:1})
notificationSchema.index({date:-1})

notificationSchema.statics.markAllAsRead =function(userId:Types.ObjectId){
return this.updateMany(
    {user:userId,read:false},
    {$set: {read:true}}
)
} 

notificationSchema.statics.createNotification = async function(userId:Types.ObjectId,type:NotificationsType,message:string,metadata?:any){
    const notification = new this({
        user: userId,
        type,
        message,
        metadata
    })
    return await notification.save()
}

notificationSchema.methods.markAsRead = function(){
    this.read = true
    return this.save()
}


interface NotificationsModel extends Model<INotification>{
    markAllAsRead:(userId:Types.ObjectId) => Promise<any>;
    createNotification:(
        userId:Types.ObjectId,
        type:NotificationsType,
        message:string,
        metadata?:any) => Promise<INotification>;
}

export const Notification = model<INotification,NotificationsModel>('Notification',notificationSchema)

