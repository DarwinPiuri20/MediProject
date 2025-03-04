const express = require("express");
const User=require("../models/User");
const authMiddlewares=require("../middlewares/authMiddlewares");
const roleMiddlewares=require("../middlewares/roleMiddlewares");
const router=express.Router();


/// create user

router.post("/",async(req,res)=>{
    try{
        const newUser= new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    }catch(e){
        res.status(400).json({message: e.message})
    }
})


/// get users only admin

router.get("/",authMiddlewares,roleMiddlewares("administrator"),async(req,res)=>{
    try{
        const users = await User.find();
        res.json(users);
    }catch(e){
        res.status(500).json({message: e.message})
    }
    });

/// get authenticated user

router.get("/me",authMiddlewares,async(req,res)=>{
    try{
        if(!req.user){
            return res.status(401).json({message:"Unauthorized"});
        }
        const user = await User.findById(req.user.id).select("-password -id_card");

        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        res.json(user);
    }catch(e){
        res.status(500).json({message: e.message})
    }
    });

    /// desactivate user
    router.put("/:id/desactivate",authMiddlewares,roleMiddlewares("administrator"),async(req,res)=>{
        try{
            const user = await User.findById(req.params.id);
            if(!user){
                return res.status(404).json({message:"User not found"});
            }
            user.state="inactive";
            await user.save();
            res.json({message:"User desactivated"});
        }catch(e){
            res.status(500).json({message: e.message})
        }
        });
           

















    ///verify id_card

    router.post("/verify-id-card",async (req,res)=>{
        const {email,id_card} = req.body;
    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({message:"User not found"});

        }
        const isValid = await user.compareId(id_card);
        if(!isValid){
            return res.status(401).json({message:"Invalid id_card"});
        }
        return res.status(200).json({message:"Id card is valid"});
    }catch(e){
        res.status(500).json({message: e.message})
    }
    }
);

    module.exports=router;
