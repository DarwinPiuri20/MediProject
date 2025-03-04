
//// role middlewares
module.exports= function(...allowedRoles){  //// spread operator  allowedRoles ->Roles Array
    return(req,res,next)=>{
        if(!req.user){
            return res.status(401).json({message:"Unauthorized"});
        }
        if(!allowedRoles.includes(req.user.role)){
            return res.status(403).json({message:"Forbidden"});
        }
        next();
    }

};