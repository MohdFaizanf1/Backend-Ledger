const userModel = require("../models/user.model");

/** 
* - user register controller
* - POST /api/auth/register
*/

function userRegisterController(req,res){
    
    const {email,password,name}=req.body

    const isExist = await userModel.findOne({
        email:email
    })
    if(isExists){
        return res.status(422).json({
            message:"User already exists with this email",
            status:"failed"
        })
    }
    const user = await userModel.create({
        email,password,name
    })
}

module.exports ={
    userRegisterController
}