const Mongoose=require('mongoose')


const connectDB=async()=>{
   

    const connection= await Mongoose.connect("mongodb+srv://Prasanth007:Prasanthpv3012345@prasanth.bzikmtz.mongodb.net/?retryWrites=true&w=majority")


    console.log('Database Connected');


}
module.exports=connectDB