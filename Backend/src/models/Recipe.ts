import {Schema,model,Document,Types} from 'mongoose'
import { IUser } from './User'
import { IMedicine } from './Medicine'
interface IMedicineRecipe{
    medicine:Types.ObjectId | IMedicine,
    quantity:number
    instructions?:string
    schedule?:string
}
export interface IRecipe extends Document{
    patient:Types.ObjectId | IUser,
    doctor:Types.ObjectId | IUser,
    medicines:IMedicineRecipe[],
    issueDate?:Date,
    pdfUrl?:string,
    pharmacyVerified:boolean,
    createdAt?:Date,
    updatedAt?:Date,
}

const recipeSchema = new Schema<IRecipe>({
    patient:{type:Schema.Types.ObjectId,ref:'User',required:true},
    doctor:{type:Schema.Types.ObjectId,ref:'User',required:true},
    medicines:[{
        medicine:{type:Schema.Types.ObjectId,ref:'Medicine',required:true},
        quantity:{type:Number,required:true , min: 1},
        instructions:{type:String},
        schedule:{type:String},
    }],
    issueDate:{type:Date, default:Date.now},
    pdfUrl:{type:String},
    pharmacyVerified:{type:Boolean, default:false},
    createdAt:{type:Date, default:Date.now},
    updatedAt:{type:Date, default:Date.now}
})

// Add validation for at least one medicamento
recipeSchema.pre('validate',function(next){
    if(this.medicines.length === 0){
        throw new Error('Recipe must have at least one medicine')
    }
    next()
})


export const Recipe= model<IRecipe>('Recipe',recipeSchema)