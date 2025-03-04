const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { validationResult } = require("express-validator");


exports.register = async (req, res) => {
    const errors=validationResult(req);       ///mistakes validation
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const { name, lastname, id_card, email, phone, password, role } = req.body;    ////destructuring object

try{
    let user = await User.findOne({ email });                ////check if user exists
    if (user) {
        return res.status(400).json({ message: "The user already exists" });
    }


    const salt = await bcrypt.genSalt(10);                 /// generate salt
    const hashedPassword = await bcrypt.hash(password, salt);   ////encrypt password

    user= new User({                                            ////create user
        name,
        lastname,
        id_card,
        email,
        phone,
        password: hashedPassword,
        role
    });

    await user.save();

    const payload = {                                            ////create token
        id: user.id,
        role: user.role
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn:"7d" });

    res.status(201).json({token});

}
catch(e){
    res.status(400).json({message: e.message});
}
};


exports.login = async (req, res) => {                          
    const {email,password}=req.body;                              ///destructuring object 

    try{
        let user=await User.findOne({email});                          //check if user exists
        if(!user){
            return res.status(400).json({message:"User not found"});
        }

        //compare password
        const isMatch=await bcrypt.compare(password,user.password);              ///compare password
        if(!isMatch){
            return res.status(400).json({message:"Incorrect credentials"});
        }


        const payload={                                                         //create token
            id:user.id,
            role:user.role
        };

        const token=jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"7d"});

        res.status(200).json({token,role:user.role});

    }catch(e){
        res.status(400).json({message: e.message});
    }
};