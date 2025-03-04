const mongoose=require('mongoose'); // importing mongoose
const bcrypt=require('bcryptjs');

//// user schema
const userSchema= new mongoose.Schema({
    name:{type:String,required:true},
    lastname:{type:String,required:true},
    id_card:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    phone:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    role:{type:String,enum:["patient","doctor","administrator","pharmacy","nurse"],required:true},
    state:{type:String,enum:["active","inactive"],required:true,default:"active"},
    creation_date:{type:Date,default:Date.now},

});



//// encrypt id_card
userSchema.pre("save",async function(next){   //// encrypt id_card
    if(!this.isModified("id_card")) return next();    //// if id_card is not modified

    try{
        const salt= await bcrypt.genSalt(10); 
        this.id_card=await bcrypt.hash(this.id_card,salt);
        next();
    }catch(e){
        next(e);
    }

})

///verify id_card

userSchema.methods.compareId = async function(id_card){
    return await bcrypt.compare(id_card,this.id_card);
};


module.exports=mongoose.model("User",userSchema);