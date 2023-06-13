const User = require("../Schema/Usersschem")
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')


const SignUp=async(req,res)=>{
    
    const {Name,Email,Password}=req.body

    const reg=await User.findOne({Email})

    if(!Name || !Email || !Password){
       return res.json({msg:'Fill all'})
    }

    if(reg){
        return res.json({msg:'Email already used'})
    }
    else{
       const salt=await bcrypt.genSalt(10)
       const hashpassword=await bcrypt.hash(Password,salt)
       const signupuser=await User.create({Name,Email,Password:hashpassword})

       const Token=gentoken(signupuser._id)
  
        
       res.json({msg:'User Signup Success',signupuser,Token:Token,username:signupuser.Name,userid:signupuser._id})

    //    console.log({Token:Token});

   

    }
}

const Signin=async(req,res)=>{

    const {Email,Password}=req.body

    const finduser=await User.findOne({Email})
    if(!Email || !Password){
        return res.json({msg:'Fill all'})
    }

    if(finduser && bcrypt.compareSync(Password,finduser.Password)){

        Token=gentoken(finduser._id)
         res.json({msg:'Login Success',Token:Token,finduser,username:finduser.Name,userid:finduser._id})
        console.log({msg:'Login Success',Token:Token,finduser,username:finduser.Name,userid:finduser._id});
      
    }
    else {
       return res.json({msg:'Email and Password is not correct'})
    }

}

const finduser=async(req,res)=>{

    const _id=req.params.id

    const find=await User.findById(_id)
    res.json({msg:'User Details',find})
}

const gentoken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'1d'}); 
}

module.exports={SignUp,Signin,finduser}