import {Schema,model,Document,Types,Model} from 'mongoose'
import { IMedicine } from './Medicine'
import {IEstablishment} from './Establishment'


export interface IPharmacyStock extends Document{
    pharmacy:Types.ObjectId | IEstablishment
    medicine:Types.ObjectId | IMedicine
    quantity:number
    updatedAt?:Date
}

const pharmacyStockSchema = new Schema<IPharmacyStock>({
    pharmacy:{type:Schema.Types.ObjectId,ref:'Establishment',required:true, index:true},
    medicine:{type:Schema.Types.ObjectId,ref:'Medicine',required:true, index:true},
    quantity:{type:Number,required:true, min:0, validate:{
        validator:Number.isInteger,
        message:'Quantity must be an integer'
    }},
    updatedAt:{type:Date, default:Date.now, index:true}
},{

    timestamps:false,
    versionKey:false
})

//Add pre-save hook to update actualizadoEn
pharmacyStockSchema.pre<IPharmacyStock>('save',function(next){
    this.updatedAt = new Date()
    next()
})

//Add static method for inventory updates
pharmacyStockSchema.statics.updateInventory=async function (pharmacyId:Types.ObjectId,
medicineId:Types.ObjectId,
quantity:number){
    return this.findOneAndUpdate(
        {pharmacy:pharmacyId,medicine:medicineId},
        {$inc:{quantity}},
        {new:true, upsert:true}
    ).populate('medicine','name')
};

//Add instance method for critical stock check
pharmacyStockSchema.methods.criticalStock =function(threshold:number=1){
    return this.quantity < threshold
}

//Define the model type with custom static methods
interface PharmacyStockModel extends Model<IPharmacyStock>{
    updateInventory:(pharmacyId:Types.ObjectId,medicineId:Types.ObjectId,quantity:number)=>Promise<IPharmacyStock>
}

export const PharmacyStock = model<IPharmacyStock,PharmacyStockModel>('PharmacyStock',pharmacyStockSchema)