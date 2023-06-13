const Mongoose  = require("mongoose");



const Userschema=Mongoose.Schema({
    Name:{type:String},
    Email:{type:String},
    Password:{type:String}
})

const User=Mongoose.model('NEW TASK USER',Userschema)

module.exports=User